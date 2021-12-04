export default {
  data() {
    return {
      resending: false,
    }
  },
  methods: {
    async resendConfirmationEmail() {
// Temp comment
      this.resending = true;
      try {
        await this.$api.Auth.sendConfirmationEmail();
        setTimeout(() => {
          this.resending = false;
        }, 120000);
      } catch (e) {
        this.resending = false;
      }
    }
  },
