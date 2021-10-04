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
      <div class="registration-form__buttons">
        <Button
          :refs="$refs"
          :disabled="resending"
          @click="resendConfirmationEmail()"
        >
          Resend Confirmation Email
        </Button>
      </div>
    </div>
    <EmailValidationModal
      :opened="areYouSureDialog"
      :suggestions="emailValidationSuggestions"
      :form="form"
      @close="areYouSureDialog = false"
      @submit="submit"
    />
  </div>
</template>

<script>
import registrationMixin from "./registration.mixin";

export default {
  extends: registrationMixin,
  props: {
    value: String,
    page: Object,
    disabled: Boolean
  },
  data() {
    return {
      form: {
        registration_form_id: this.value,
        data: {}
      },
      areYouSureDialog: false,
      emailValidationSuggestions: [],
      chooseSignUp: false,
    };
  },
  mounted() {
    if(this.$route.query.signup) {
      this.chooseSignUp = true;
    }
  },
  methods: {
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
    }
  },
  computed: {
    registrationForm() {
      return (
        (this.page || this.currentPage).registration_forms[this.value] || {}
      );
    }
  }
};
</script>

<style scoped lang="scss">
.registration-form {
  max-width: 800px;
  margin: auto;
  width: 100%;
  background: white;

  &__form {
