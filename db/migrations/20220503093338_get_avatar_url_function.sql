-- migrate:up
CREATE OR REPLACE FUNCTION public.get_avatar_url(id TEXT) 
RETURNS TEXT AS $$
BEGIN
  RETURN 'https://avatars.dicebear.com/api/micah/' || id || '.svg';
END;
$$ LANGUAGE PLPGSQL STRICT;

-- migrate:down
DROP FUNCTION IF EXISTS public.get_avatar_url;