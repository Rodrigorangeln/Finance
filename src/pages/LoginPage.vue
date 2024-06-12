<template>
  <q-page class="padding">
    <q-form class="row justify-center" @submit.prevent="handleSubmit">
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="form.email" label="Email" />
        <q-input v-model="form.password" label="Password" type="password" />
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
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthUser from 'src/composables/UseAuthUser';
import { useRouter } from 'vue-router';

const { signIn } = useAuthUser();
const router = useRouter();

const form = ref({
  email: '',
  password: '',
});

const handleSubmit = async () => {
  try {
    if (!form.value.email || !form.value.password) {
      throw new Error('Please fill all fields');
    }
    await signIn(form.value);
    router.push({ name: 'HomePage' });
  } catch (error: any) {
    alert(error.message);
  }
};
</script>
