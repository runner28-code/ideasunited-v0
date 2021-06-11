export default {
  data() {
    return {
      resending: false,
    }
  },
    async resendConfirmationEmail() {
      this.resending = true;
