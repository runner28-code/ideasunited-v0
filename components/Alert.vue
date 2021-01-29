<template>
  <v-snackbar
    class="alert-container"
    v-model="alert"
    top
    :timeout="alert.timeout || 15000"
  >
