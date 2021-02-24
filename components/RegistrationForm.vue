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
