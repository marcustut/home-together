import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { useSupabaseClient } from '@/lib/supabase';
import { useUsersQuery } from '@/graphql';

function Events() {
  const supabase = useSupabaseClient();
  const [users] = useUsersQuery();

  console.log(users);

  return (
    <>
      <Meta title="Events" />
      <CenteredFlexBox>
        <Typography variant="h1">Page 1</Typography>
        <pre>{JSON.stringify(supabase.auth.user(), null, 2)}</pre>
      </CenteredFlexBox>
    </>
  );
}

export default Events;
