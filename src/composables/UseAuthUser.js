import { ref, onMounted } from 'vue';
import useSupabase from 'src/boot/supabase';

const user = ref(null);

export default function useAuthUser() {
  const { supabase } = useSupabase();

  const fetchUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    user.value = session?.user ?? null;
  };

  const signIn = async ({ email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
    await fetchUser();
  };

  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      throw error;
    }
    await fetchUser();
  };

  const signUp = async ({ email, password }) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      throw error;
    }
    await fetchUser();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    user.value = null;
  };

  const sendPasswordRecoveryEmail = async ({ email }) => {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) {
      throw error;
    }
  };

  const isLoggedIn = () => user.value !== null;
  console.log('user', user.value);

  onMounted(() => {
    fetchUser();
    console.log('user', user.value);
  });

  return {
    user,
    signIn,
    loginWithGoogle,
    signUp,
    signOut,
    sendPasswordRecoveryEmail,
    isLoggedIn,
  };
}
