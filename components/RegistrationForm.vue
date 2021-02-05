<template>
  <div
    class="registration-form"
    :class="{
      'registration-form-hidden': currentUser && currentUser.confirmed
    }"
  >
    <div class="registration-form__form" v-if="!currentUser">
      <div v-if="registrationForm.login_form && !chooseSignUp">
        <AuthForm :disabled="disabled" />
        <div class="registration-form__not-registered">
          <p class="registration-form__not-registered-cta">
            {{ registrationForm.not_registered_cta || "Not registered?" }}
