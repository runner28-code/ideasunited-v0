<template>
  <div class="forgot-password-page">
    <v-form
      ref="form"
      v-model="formModel"
      @submit.prevent="submit"
      class="forgot-password-page__form"
    >
      <div class="forgot-password-page__title">New Password</div>
      <TextField label="Password" v-model="form.password" type="password" />
      <TextField
        label="Password Confirmation"
        v-model="form.password_confirmation"
        type="password"
      />
      <Button type="submit" :refs="$refs" block x-large>
        Submit
      </Button>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: 'simple',
  data() {
    return {
      formModel: null,
      form: {},
      token: this.$route.query.token
    };
  },
  created() {
    if (process.client) {
      this.checkPasswordToken();
    }
  },
  methods: {
    async checkPasswordToken() {
      try {
        const { data } = await this.$api.Auth.checkPasswordToken({
          token: this.token
        });
          this.$alert("Token not found", "error");
          this.$router.push("/");
        }
      } catch (e) {
        console.error(e);
      }
    },
    async submit() {
      try {
        const { data } = await this.$api.Auth.setPassword({
          ...this.form,
          token: this.token
        });
        this.$store.commit("auth/setToken", data.token);
        this.$store.dispatch("user/fetch");
        this.$router.push("/").catch(() => {});
      } catch (e) {
        console.error(e);
      }
    }
