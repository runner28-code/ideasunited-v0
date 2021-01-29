<template>
  <v-snackbar
    v-if="alert"
    v-model="alert"
    top
    :timeout="alert.timeout || 15000"
