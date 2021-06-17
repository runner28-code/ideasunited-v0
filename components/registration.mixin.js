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
