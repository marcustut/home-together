import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';
import Auth from '@/pages/Auth';
import { UrqlProvider } from '@/lib/urql';
import { SupabaseProvider, supabase } from '@/lib/supabase';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <SW />
      <SupabaseProvider>
        <UrqlProvider>
          <BrowserRouter>
            {supabase.auth.user() ? (
              <>
                <Header />
                <Sidebar />
                <Pages />
              </>
            ) : (
              <Auth />
            )}
          </BrowserRouter>
        </UrqlProvider>
      </SupabaseProvider>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
