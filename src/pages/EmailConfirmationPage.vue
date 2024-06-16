<template>
  <q-page class="padding">
    <p class="text-h5 text-center">Email confirmation</p>
    <p class="text-center">
      A confirmation email was sent to <strong>{{ $route.query.email }}</strong
      >. Please check your inbox and click on the link to confirm your email.
    </p>
    <div class="row justify-center">
      <div class="q-pt-md col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-btn
          label="Voltar p Login"
          color="primary"
          class="full-width"
          outline
          rounded
          to="/login"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
