<template>
  <div></div>
</template>

<script>
  layout: 'simple',
  created() {
    if (process.client) this.confirm();
  },
  methods: {
    async confirm() {
      const { confirmation_token } = this.$route.query;
      try {
        const { data } = await this.$api.Auth.confirm({ confirmation_token });

        this.$store.commit("auth/setToken", data.token);
