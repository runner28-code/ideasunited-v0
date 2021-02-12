<template>
  <div class="auth-register-form">
    <div v-if="registrationForm">
      <div v-if="!currentUser">
        <div v-show="registrationForm.login_form && !chooseSignUp" class="auth-register-form__login">
          <AuthForm
            :login-form-request="loginFormRequest"
            @loginFormResponse="loginFormResponse"
          />
          <div class="auth-register-form__not-registered">
            <p class="auth-register-form__not-registered-cta">
              {{ registrationForm.not_registered_cta || "Not a member yet? It’s easy to join!" }}
            </p>
            <v-btn
              class="signup-btn"
              elevation="0"
              @click="clickRegister()"
              >{{ registrationForm.sign_up_btn_text || "Register" }}</v-btn
          </div>
