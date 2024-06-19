<template>
  <q-page class="padding">
    <q-form class="row justify-center" @submit.prevent="handleForgotPassword">
      <p class="col-12 text-h5 text-center q-mt-md">Reset Password</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="email" label="Email" />
        <div>
          <q-btn
            label="Send email"
            color="primary"
            class="full-width"
            flat
            type="submit"
          />
        </div>
        <div>
          <q-btn
            label="Back to login"
            color="black"
            class="full-width"
            flat
            to="/login"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthUser from 'src/composables/UseAuthUser';

const email: any = ref('');

const { sendPasswordRecoveryEmail } = useAuthUser();

const handleForgotPassword = async () => {
  try {
    if (!email.value) {
      throw new Error('Please fill all fields');
    }
    await sendPasswordRecoveryEmail(email.value);
    alert('Email sent');
  } catch (error: any) {
    alert(error.message);
  }
};
</script>
