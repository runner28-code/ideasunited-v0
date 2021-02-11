<template>
  <v-snackbar
    v-if="alert"
    v-model="alert"
    top
    :timeout="alert.timeout || 15000"
  >
    <v-alert
      :icon="false"
      dismissible
      class="alert"
      dense
      :color="activeTheme ? activeTheme.primary_color : '#E12D1B'"
      :value="!!alert"
