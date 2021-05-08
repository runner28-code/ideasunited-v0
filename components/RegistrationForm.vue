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
          </p>
          <v-btn
            class="signup-btn"
            elevation="0"
            @click="chooseSignUp = true"
            >{{ registrationForm.sign_up_btn_text || "Apply" }}</v-btn
          >
        </div>
      </div>
      <div v-if="!registrationForm.login_form || chooseSignUp">
        <Title
          v-if="registrationForm.title"
          tag="h2"
          class="registration-form__title"
          >{{ registrationForm.title }}</Title
        >
        <div
          v-if="registrationForm.description"
          class="registration-form__description"
        >
          {{ registrationForm.description }}
        </div>
        <DynamicForm
          :submit="submit"
          :fields="registrationForm.registration_form"
          v-model="form"
          :mark-required="registrationForm.mark_required"
          show-label
          :btn-text="registrationForm.btn_text"
          :login-form="registrationForm.login_form"
          @backToLogin="backToLogin()"
          :disabled="disabled"
          :show-back-to-login="true"
        />
      </div>
    </div>
    <div
      v-else-if="!currentUser.confirmed"
      class="registration-form__not-confirmed"
    >
      <Title
        v-if="registrationForm.title"
        tag="h2"
        class="registration-form__title"
        >{{ registrationForm.title }}</Title
      >
      <p class="registration-form__thank-you">
        Thank you! Please check your email and click the verification link,
        which will direct you to your first log in.
      </p>
