<template>
  <div class="forgot-password-page">
    <v-form
      ref="form"
      v-model="formModel"
      @submit.prevent="submit"
      class="forgot-password-page__form"
      v-if="!submitted"
    >
      <div class="forgot-password-page__title">Forgot Password?</div>
