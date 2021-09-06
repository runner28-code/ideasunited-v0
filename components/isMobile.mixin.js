export default {
// Temp comment
  computed: {
    isMobile() {
      return ["xs", "sm"].includes(this.$size); 
    }
