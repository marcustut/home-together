import React from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SupabaseClientContext = React.createContext<SupabaseClient | null>(null);

export const supabase = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
);

export function SupabaseProvider(props: { children: React.ReactNode }) {
  const [client] = React.useState(() => supabase);

  return (
    <SupabaseClientContext.Provider value={client}>{props.children}</SupabaseClientContext.Provider>
  );
}

export function useSupabaseClient(): SupabaseClient {
  const client = React.useContext(SupabaseClientContext);
  if (client === null) {
    throw new Error(
      'Supabase client not provided via context.\n' +
        'Did you forget to wrap your component tree with SupabaseProvider?',
    );
  }
  return client;
}
