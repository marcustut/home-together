import { FullSizeCenteredFlexBox } from '@/components/styled';
import { Button, Input, Paper, Typography, Backdrop, CircularProgress } from '@mui/material';
import { useCallback, useState } from 'react';
import useNotifications from '@/store/notifications';
import { useSupabaseClient } from '@/lib/supabase';
import { OptionsObject } from 'notistack';
import regexes from '@/utils/regex';
import { useNavigate } from 'react-router-dom';

const validatePhoneNumber = (
  phoneNumber: string,
): { ok: boolean; err?: 'empty string' | 'invalid malaysian phone number' } => ({
  ok: phoneNumber.length !== 0 && !!phoneNumber.match(regexes.phoneNumber.malaysia),
  err:
    phoneNumber.length === 0
      ? 'empty string'
      : !phoneNumber.match(regexes.phoneNumber.malaysia)
      ? 'invalid malaysian phone number'
      : undefined,
});

function Auth() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [, notificationsActions] = useNotifications();
  const supabase = useSupabaseClient();
  const navigate = useNavigate();

  const handleResponse = useCallback(
    ({
      action,
      message,
    }: {
      action?: () => void;
      message?: {
        console?: string;
        variant: 'error' | 'success';
        toast: string;
        toastOpts?: OptionsObject;
      };
    }) => {
      if (action && message)
        throw new Error("Only provide either 'action' or 'message' to handlerError");
      if (action) action();
      if (message) {
        if (message.console) {
          if (message.variant === 'error') console.error(message.console);
          else console.info(message.console);
        }
        notificationsActions.push({
          message: message.toast,
          options: message.toastOpts ? message.toastOpts : { variant: message.variant },
        });
      }
      setLoading(false);
    },
    [notificationsActions],
  );

  const sendOtp = useCallback(async () => {
    setLoading(true);
    const { ok, err } = validatePhoneNumber(phoneNumber);
    if (!ok && err) {
      let errMsg = '';
      if (err === 'empty string') errMsg = `Phone number cannot be empty`;
      else if (err === 'invalid malaysian phone number')
        errMsg = `'${phoneNumber}' is not a valid Malaysian phone number`;
      handleResponse({ message: { variant: 'error', console: errMsg, toast: errMsg } });
      return;
    }
    const { user, error } = await supabase.auth.signIn({ phone: phoneNumber });
    if (error) {
      handleResponse({
        message: {
          variant: 'error',
          console: error.message,
          toast: `Error sending OTP to '${phoneNumber}'`,
        },
      });
      return;
    }
    handleResponse({
      action: () => {
        console.info(user);
        setOtpSent(true);
        notificationsActions.push({ message: 'OTP sent!', options: { variant: 'success' } });
        navigate('/welcome');
      },
    });
  }, [handleResponse, navigate, notificationsActions, phoneNumber, supabase.auth]);

  const verifyOtp = useCallback(async () => {
    setLoading(true);
    const { session, error } = await supabase.auth.verifyOTP({
      phone: phoneNumber,
      token: otp,
    });
    if (error) {
      handleResponse({
        message: { variant: 'error', console: error.message, toast: 'OTP is invalid or expired' },
      });
      return;
    }
    handleResponse({
      action: () => {
        console.info(session);
        notificationsActions.push({
          message: 'Successfully signed in!',
          options: { variant: 'success' },
        });
      },
    });
  }, [handleResponse, notificationsActions, otp, phoneNumber, supabase.auth]);

  return (
    <>
      <FullSizeCenteredFlexBox style={{ flexDirection: 'column', height: '100vh' }}>
        <Typography variant="h3" fontWeight="bold">
          Home Together
        </Typography>
        <Paper
          sx={{
            marginTop: 2,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6">Phone Login</Typography>
          <Input
            placeholder="+60"
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={otpSent}
          />
          {otpSent && (
            <Input
              style={{ marginTop: 6 }}
              placeholder="OTP Pin"
              onChange={(e) => setOtp(e.target.value)}
            />
          )}
          <Button
            style={{ marginTop: 12 }}
            variant="contained"
            onClick={!otpSent ? sendOtp : verifyOtp}
          >
            {!otpSent ? 'Send OTP' : 'Verify OTP'}
          </Button>
        </Paper>
      </FullSizeCenteredFlexBox>
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
    </>
  );
}

export default Auth;
