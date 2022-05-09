-- migrate:up
COMMENT ON SCHEMA public IS e'@graphql({"inflect_names": true})';

-- migrate:down
COMMENT ON SCHEMA public IS NULL;
