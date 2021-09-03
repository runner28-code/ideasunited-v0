export default {
  data() {
    return {
      resending: false,
    }
  },
  methods: {
      this.resending = true;
      try {
        await this.$api.Auth.sendConfirmationEmail();
        setTimeout(() => {
          this.resending = false;
        }, 120000);
