<template>
  <v-dialog
    :width="dialogWidth"
    v-model="opened"
  >
      <v-btn class="dialog-close" icon @click="cancel">
        <v-icon>$close</v-icon>
      </v-btn>
      <v-card-text>
        <AuthRegisterForm
