<template>
  <q-page class="padding">
    <q-form class="row justify-center" @submit.prevent="handleSubmit">
      <p class="col-12 text-h5 text-center q-mt-md">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          v-model="form.email"
          label="Email"
          type="email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório']"
        />
        <q-input
          v-model="form.password"
          label="Password"
          type="password"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Campo obrigatório']"
        />
        <div class="q-pt-md">
          <q-btn
            label="Login"
            color="primary"
            class="full-width"
            outline
            rounded
            type="submit"
          />
        </div>
        <div>
          <q-btn
            label="Register"
            color="primary"
            class="full-width"
            flat
            to="/register"
          />
        </div>
        <div>
          <q-btn
            label="Forgot password"
            color="primary"
            class="full-width"
            flat
            to="/forgot-password"
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
import { Notify } from 'quasar';

const { signIn } = useAuthUser();
const router = useRouter();

const form = ref({
  email: '',
  password: '',
});

const handleSubmit = async () => {
  try {
    await signIn(form.value);
    router.replace({ name: 'me' });
  } catch (error: any) {
    Notify.create({
      message: error.message,
      color: 'negative',
      position: 'top',
      timeout: 2000,
    });
  }
};
</script>
