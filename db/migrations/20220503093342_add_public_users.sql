-- migrate:up
CREATE TABLE public.users (
  id UUID REFERENCES auth.users NOT NULL,
  phone_number TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  moved_in_at TIMESTAMP WITH TIME ZONE,
  moving_out_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  UNIQUE (phone_number)
  -- CONSTRAINT malaysian_phone_number CHECK (phone_number ~ $$^(60)[0|1|2|3|4|6|7|8|9]\-*[0-9]{8,9}$$)
);

CREATE OR REPLACE TRIGGER update_profile_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- migrate:down
ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;

DROP TRIGGER update_profile_updated_at ON public.users;

DROP TABLE public.users;
