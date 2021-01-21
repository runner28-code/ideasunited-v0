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
