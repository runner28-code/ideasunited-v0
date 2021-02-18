<template>
  <v-snackbar
    v-if="alert"
    class="alert-container"
    v-model="alert"
    top
    :timeout="alert.timeout || 15000"
  >
    <v-alert
      :icon="false"
      dismissible
      dense
      :color="activeTheme ? activeTheme.primary_color : '#E12D1B'"
      :value="!!alert"
      @input="alert = $event"
    >
