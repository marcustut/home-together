-- migrate:up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- INSERT INTO public.users (id, phone_number, display_name, avatar_url)
  -- VALUES (new.id, new.phone, public.random_chinese_name(), public.get_avatar_url(new.id))
  INSERT INTO public.users (id, phone_number, display_name, avatar_url)
  VALUES (new.id, new.phone::TEXT, public.random_chinese_name(), public.get_avatar_url(new.id::TEXT))
  ON CONFLICT (id) DO UPDATE SET phone_number = new.phone::TEXT;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created AFTER INSERT OR UPDATE ON auth.users FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- migrate:down
DROP TRIGGER on_auth_user_created ON auth.users;

DROP FUNCTION IF EXISTS public.handle_new_user;