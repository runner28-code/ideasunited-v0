<template>
  <div class="forgot-password-page">
    <v-form
      v-model="formModel"
      @submit.prevent="submit"
      class="forgot-password-page__form"
      v-if="!submitted"
    >
      <div class="forgot-password-page__title">Forgot Password?</div>
      <TextField label="Email" v-model="form.email" type="email" />
