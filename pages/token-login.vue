<template>
  <div></div>
</template>

<script>
export default {
  layout: 'simple',
  created() {
      const { token } = this.$route.query;
      if (token) {
        this.login(token);
      } else {
        this.$router.push("/");
      }
    }
  },
  methods: {
    async login(token) {
