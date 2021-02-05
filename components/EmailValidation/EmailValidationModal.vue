<template>
  <v-dialog max-width="500" v-model="opened">
    <v-card class="email-validation__dialog">
      <v-btn class="close" icon @click="close()">
      </v-btn>
      <Title>Are you sure?</Title>
      <p class="email-validation__message" >An email in this form appears to have a typo in it.</p>
