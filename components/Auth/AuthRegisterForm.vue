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
            >{{ registrationForm.title }}</Title
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
      chooseSignUp: false,
      registrationForm: null,
      loginFormRequest: false,
    };
  },
  mounted() {
    this.fetchForm();
    if (this.dialogState) {
      this.chooseSignUp = this.dialogState.chooseSignUp;
    }
  },
  methods: {
    async fetchForm() {
      const { data } = await this.$api.RegistrationForm.root();
      this.registrationForm = data;
      this.form.registration_form_id = data.id;
      this.form.register_url = window.location.href;
    },
    async submit() {
      try {
        const { data } = await this.$api.RegistrationForm.submit(this.form);
        this.emailValidationSuggestions = [];
        this.$store.commit("auth/setToken", data.token);
        this.$store.dispatch("user/fetch");
        if (this.registrationForm.destination_page_id)
          this.$router.push("/" + this.registrationForm.destination_url);
      } catch (e) {
        if (!e.response.data) return;
        const data = e.response.data;
        if (data.email_validation_response == "are_you_sure") {
          if (data.email_suggestions)
            this.emailValidationSuggestions = data.email_suggestions;
          else this.emailValidationSuggestions = [];
          this.areYouSureDialog = true;
        }
      }
    },
    backToLogin() {
      this.chooseSignUp = false;
      this.updateDialogState();
    },
    clickRegister() {
      this.loginFormRequest = true;
      this.chooseSignUp = true;
      this.updateDialogState();
    },
    loginFormResponse(res) {
      if(res) {
        const emailUuid = this.registrationForm.registration_form.find((field) => field.short_name == "email").uuid;
        this.form.data[emailUuid] = res.email;
        if(res.password) {
          const passwordUuid = this.registrationForm.registration_form.find((field) => field.short_name == "password").uuid;
          this.form.data[passwordUuid] = res.password;
        }
      }
      this.loginFormRequest = false;
    },
    updateDialogState() {
      if(this.dialogState) this.dialogState.chooseSignUp = this.chooseSignUp;
    }
  },
  watch: {
    dialogState: {
      deep: true,
      handler() {
        if (this.dialogState) {
          this.chooseSignUp = this.dialogState.chooseSignUp;
        }
      }
    },

  }
}
</script>

<style lang="scss" scoped>
.auth-register-form {
  &__login {
    max-width: 300px;
    margin: 0 auto;
  }
  &__not-registered {
    text-align: center;
  }
}

.register {
  &__title {
    color: #262729;
    text-align: center;
    font-size: 28px;
    line-height: 1.2;
    font-weight: bold;
    margin-bottom: 20px;
  }

