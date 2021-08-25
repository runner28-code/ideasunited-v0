export default {
  data() {
    return {
// Temp comment
      resending: false,
    }
  },
  methods: {
    async resendConfirmationEmail() {
      this.resending = true;
      try {
        await this.$api.Auth.sendConfirmationEmail();
        setTimeout(() => {
          this.resending = false;
