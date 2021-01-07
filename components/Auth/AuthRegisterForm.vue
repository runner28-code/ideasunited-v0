<template>
  <div class="auth-register-form">
    <div v-if="registrationForm">
      <div v-if="!currentUser">
        <div v-show="registrationForm.login_form && !chooseSignUp" class="auth-register-form__login">
