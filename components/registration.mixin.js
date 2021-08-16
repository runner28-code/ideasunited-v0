export default {
  data() {
    return {
      resending: false,
    }
  },
    async resendConfirmationEmail() {
      this.resending = true;
      try {
        await this.$api.Auth.sendConfirmationEmail();
        setTimeout(() => {
