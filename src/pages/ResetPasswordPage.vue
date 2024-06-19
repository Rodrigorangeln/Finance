<template>
  <q-page class="padding">
    <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
      <p class="col-12 text-h5 text-center q-mt-md">Reset Password</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="password" label="Email" />
        <div>
          <q-btn
            label="New password"
            color="primary"
            class="full-width"
            flat
            type="submit"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthUser from 'src/composables/UseAuthUser';
import { useRouter } from 'vue-router';

const password: any = ref('');

const { resetPassword } = useAuthUser();
// const route = useRoute();
const router = useRouter();

const handlePasswordReset = async () => {
  try {
    if (!password.value) {
      throw new Error('Please fill all fields');
    }
    await resetPassword(password.value);
    router.push({ name: 'login' });
  } catch (error: any) {
    alert(error.message);
  }
};
</script>
