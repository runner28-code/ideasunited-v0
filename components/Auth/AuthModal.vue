<template>
  <v-dialog
    :width="dialogWidth"
    v-model="opened"
    <v-card class="auth-modal-content">
      <v-btn class="dialog-close" icon @click="cancel">
