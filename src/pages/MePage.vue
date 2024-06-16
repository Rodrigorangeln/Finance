<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <p class="text-h5">
        Welcome, <br />
        {{ user?.user_metadata?.email || 'Guest' }}
      </p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import useAuthUser from 'src/composables/UseAuthUser';

const { user }: { user: any } = useAuthUser();
</script>
