<template>
    v-if="alert"
    class="alert-container"
    v-model="alert"
    top
    :timeout="alert.timeout || 15000"
  >
    <v-alert
      :icon="false"
