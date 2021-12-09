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
export default {
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
  right: 0;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: whitesmoke;

  &__title {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    padding-bottom: 15px;
  }

  &__form {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
    background: white;
    padding: 30px;
    max-width: 400px;
    width: 100%;

    &::v-deep {
      .text-field {
        margin-bottom: 20px;
        width: 100%;
      }
    }
