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
        setTimeout(() => {
          this.resending = false;
        }, 120000);
      } catch (e) {
        this.resending = false;
      }
    }
  },
