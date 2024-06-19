<template>
  <q-page class="padding">
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center q-mt-md">Registro</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input v-model="form.name" label="Nome" />
        <q-input v-model="form.email" label="Email" />
        <q-input v-model="form.password" label="Password" type="password" />
        <div>
          <q-btn
            label="Register"
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
import { useRouter } from 'vue-router';

const { signUp } = useAuthUser();
const router = useRouter();

const form = ref({
  name: '',
  email: '',
  password: '',
});

const handleRegister = async () => {
  try {
    if (!form.value.name || !form.value.email || !form.value.password) {
      throw new Error('Please fill all fields');
    }
    await signUp(form.value);
    router.push({
      name: 'emailConfirmation',
      query: { email: form.value.email },
    });
  } catch (error: any) {
    alert(error.message);
  }
};
</script>
