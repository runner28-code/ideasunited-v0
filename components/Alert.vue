<template>
  <v-snackbar
    v-if="alert"
    class="alert-container"
    v-model="alert"
    top
    :timeout="alert.timeout || 15000"
  >
      :icon="false"
      dismissible
      class="alert"
