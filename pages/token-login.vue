<template>
  <div></div>
</template>

<script>
export default {
  layout: 'simple',
  created() {
    if (process.client) {
      const { token } = this.$route.query;
        this.login(token);
      } else {
        this.$router.push("/");
      }
    }
  },
