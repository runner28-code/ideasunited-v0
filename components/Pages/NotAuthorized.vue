<template>
  <div class="not-authorized">
    <AuthPage
      @disableAuth="disableAuth"
      v-show="!currentUser && !authDisabled"
    />
    <div class="error-page" v-show="currentUser || authDisabled">
      <div class="error-content">
        <div class="error-title">
          Restrict access...
        </div>
        <div class="error-description">
          You don't have access to view this page.
        </div>

        <Button large to="/">Back to Home</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authDisabled: false
    };
  },
  methods: {
    disableAuth(val) {
      this.authDisabled = val;
    }
  }
};
</script>

<style scoped lang="scss">
.not-authorized {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
