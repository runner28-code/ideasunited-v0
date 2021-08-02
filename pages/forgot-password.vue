<template>
  <div class="forgot-password-page">
    <v-form
      ref="form"
      v-model="formModel"
      @submit.prevent="submit"
      class="forgot-password-page__form"
      v-if="!submitted"
    >
      <div class="forgot-password-page__title">Forgot Password?</div>
      <TextField label="Email" v-model="form.email" type="email" />
      <Button :refs="$refs" block x-large type="submit">Reset Password</Button>
    </v-form>
    <div v-else>
      Email instructions successfully sent
    </div>
  </div>
</template>

<script>
  layout: 'simple',
  data() {
    return {
      formModel: null,
      form: {},
      submitted: false
    };
  },
  methods: {
    async submit() {
      try {
        await this.$store.dispatch("auth/resetPassword", this.form);
        this.submitted = true;
      } catch {}
    }
  }
};
</script>

<style scoped lang="scss">
.forgot-password-page {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
