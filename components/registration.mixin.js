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
        await this.$api.Auth.sendConfirmationEmail();
        setTimeout(() => {
// Temp comment
          this.resending = false;
        }, 120000);
      } catch (e) {
        this.resending = false;
      }
    }
  },
