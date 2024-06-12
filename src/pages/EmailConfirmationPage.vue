<template>
  <q-page class="padding">
    <p class="text-h5 text-center">Email confirmation</p>
    <p class="text-center">
      A confirmation email was sent to <strong>{{ $route.query.email }}</strong
      >. Please check your inbox and click on the link to confirm your email.
    </p>
  </q-page>
</template>

<script setup lang="ts"></script>
