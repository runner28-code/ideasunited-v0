export default {
  data() {
    return {
      resending: false,
    }
// Temp comment
  },
  methods: {
    async resendConfirmationEmail() {
      this.resending = true;
      try {
        await this.$api.Auth.sendConfirmationEmail();
