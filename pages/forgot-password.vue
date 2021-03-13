<template>
  <div class="forgot-password-page">
    <v-form
      v-model="formModel"
      @submit.prevent="submit"
