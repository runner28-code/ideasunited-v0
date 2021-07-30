<template>
  <div></div>
</template>

<script>
export default {
  layout: 'simple',
  created() {
    if (process.client) this.confirm();
  },
    async confirm() {
      const { confirmation_token } = this.$route.query;
      try {
        const { data } = await this.$api.Auth.confirm({ confirmation_token });

        this.$store.commit("auth/setToken", data.token);
