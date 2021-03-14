<template>
  <div class="forgot-password-page">
    <v-form
      ref="form"
      v-model="formModel"
      @submit.prevent="submit"
      class="forgot-password-page__form"
    >
      <div class="forgot-password-page__title">New Password</div>
      <TextField label="Password" v-model="form.password" type="password" />
        label="Password Confirmation"
        v-model="form.password_confirmation"
        type="password"
