-- migrate:up
CREATE OR REPLACE FUNCTION public.random_between(low INTEGER ,high INTEGER)
RETURNS INTEGER AS $$
BEGIN
  RETURN floor(random() * (high - low + 1) + low);
END;
$$ LANGUAGE PLPGSQL STRICT;

-- migrate:down
DROP FUNCTION IF EXISTS public.random_between;
