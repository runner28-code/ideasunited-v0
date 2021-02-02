<template>
  <v-snackbar
    v-if="alert"
    class="alert-container"
    v-model="alert"
    :timeout="alert.timeout || 15000"
  >
    <v-alert
