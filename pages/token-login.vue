<template>
  <div></div>
</template>
<script>
export default {
  layout: 'simple',
  created() {
    if (process.client) {
      const { token } = this.$route.query;
      if (token) {
        this.login(token);
      } else {
        this.$router.push("/");
      }
    }
  },
  methods: {
