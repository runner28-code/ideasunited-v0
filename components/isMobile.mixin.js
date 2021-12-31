export default {
  computed: {
    isMobile() {
      return ["xs", "sm"].includes(this.$size); 
    }
  },
};
