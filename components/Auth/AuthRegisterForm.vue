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
            >
          </div>
        </div>
        <div v-if="!registrationForm.login_form || chooseSignUp" class="register">
          <Title
            v-if="registrationForm.title"
            tag="h2"
            class="register__title"
          >
          <div
            v-if="registrationForm.description"
            class="register__description"
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
            :show-back-to-login="true"
          />
        </div>
      </div> <!-- v-if="!currentUser" -->
      <div v-else class="register__thank-you">
        <Title class="register__thank-you_title">
          Thank you!
        </Title>
        <div v-if="!currentUser.confirmed">
          <p class="register__thank-you_message">
            Please check your email and click the verification link,
            which will direct you to your first log in.
          </p>
          <div class="register__buttons">
            <Button
              :refs="$refs"
              :disabled="resending"
              @click="resendConfirmationEmail()"
            >
              Resend Confirmation Email
            </Button>
          </div>
        </div> <!-- v-if="!currentUser.confirmed" -->
      </div> <!-- v-if="currentUser" -->
    </div> <!-- v-if="registrationForm" -->
  </div>
</template>

<script>
import registrationMixin from "../registration.mixin";

export default {
  extends: registrationMixin,
  props: {
    dialogState: Object,
  },
  data() {
    return {
      form: {
        registration_form_id: null,
        register_url: null,
        data: {}
      },
      areYouSureDialog: false,
      emailValidationSuggestions: [],
