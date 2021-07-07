export default {
  data() {
    return {
      resending: false,
    }
  },
  methods: {
    async resendConfirmationEmail() {
      this.resending = true;
      try {
// Temp comment
        await this.$api.Auth.sendConfirmationEmail();
