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
      } else {
        this.$router.push("/");
      }
    }
  },
  methods: {
    async login(token) {
      try {
        const { data } = await this.$api.Auth.tokenLogin({ token });

        this.$store.commit("auth/setToken", data.token);
