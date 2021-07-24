<template>
  <div class="auth-wrapper">
    <div class="auth">
      <div>
        <div class="auth-admin-title">
          <span >
            iU Creator Login
          </span>
        </div>
        <v-form @submit.prevent="login" ref="form" :disabled="disabled">
          <TextField
            v-model="loginForm.email"
            block
            :rules="[$rules.required]"
            label="Email"
            type="email"
            name="email"
          />
          <TextField
            :rules="[$rules.required]"
            v-model="loginForm.password"
            block
            label="Password"
            type="password"
            name="password"
          />
          <div class="auth-footer">
            <div><Button block :refs="$refs" type="submit">Log In</Button></div>
            <nuxt-link to="/forgot-password" class="forgot-password-link">
              Forgot password?
            </nuxt-link>
          </div>
        </v-form>
      </div>
    </div>

    <EmailValidationModal
      :opened="areYouSureDialog"
      :suggestions="emailValidationSuggestions"
      :form="registerForm"
      @close="areYouSureDialog = false"
      @submit="register"
    />
  </div>
</template>

<script>
import _ from "lodash";
import Title from "@/components/Title";
import { frontendToProfile } from "@/utils";

export default {
  components: { Title },
  props: {
    disabled: Boolean,
    startAtSignUp: Boolean,
    loginFormRequest: Boolean,
  },
  data() {
    return {
      registerForm: {},
      areYouSureDialog: false,
      emailValidationSuggestions: {}
    };
  },
  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        try {
          await this.$store.dispatch("auth/login", this.loginForm);
          this.$root.$emit('fullpageRebuild');
          this.$root.$emit("authModal/close");
          this.$root.$emit('leaveSignup');
          if(this.$route.name == 'index') window.location.href = frontendToProfile()[window.location.origin];
        } catch {}
      }
    },
    async registerFetch() {
      const res = await this.$store.dispatch("auth/register", this.registerForm);
      return res;
    },
    async register() {
      if (this.$refs.registerForm.validate()) {
        try {
          const { data } = await this.registerFetch();
          this.$root.$emit('fullpageRebuild');
          this.$emit("close");
        } catch(e) {
          if(!e.response.data) return;
          const data = e.response.data;
          if(data.email_validation_response == 'are_you_sure') {
            if(data.email_suggestion) this.emailValidationSuggestions = [data.email_suggestion];
            this.areYouSureDialog = true;
          }
        }
      }
    }
  },
  watch: {
    loginFormRequest: {
      handler() {
        if(this.loginFormRequest) {
          if(!this.loginForm.email) this.$emit('loginFormResponse', false);
          const res = { email: this.loginForm.email };
          if(this.loginForm.password) res.password = this.loginForm.password;
          this.$emit('loginFormResponse', res);
        }
      }
    }
  },
};
</script>

<style scoped lang="scss">
.forgot-password-link {
  text-decoration: underline;
  cursor: pointer;
  color: #E12D1B;
