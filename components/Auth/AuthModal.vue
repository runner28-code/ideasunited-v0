<template>
  <v-dialog
    :width="dialogWidth"
    v-model="opened"
  >
      <v-btn class="dialog-close" icon @click="cancel">
