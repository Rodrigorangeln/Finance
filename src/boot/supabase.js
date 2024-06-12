import { createClient } from '@supabase/supabase-js';
import useAuthUser from 'src/composables/UseAuthUser';

const supabaseUrl = 'https://ssgzaloqcychvcpyaaik.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzZ3phbG9xY3ljaHZjcHlhYWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2MTkzMDUsImV4cCI6MjAzMzE5NTMwNX0.7m543c-dstz5gY4fhwkapc0aK63Lrl2u2JYosJdRlp0';
const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();
  user.value = session?.user ?? null;
});

export default function useSupabase() {
  return { supabase };
}
