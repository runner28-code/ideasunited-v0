<template>
  <div></div>
</template>

<script>
export default {
  layout: 'simple',
  created() {
    if (process.client) this.confirm();
  },
  methods: {
    async confirm() {
      const { confirmation_token } = this.$route.query;
      try {
        const { data } = await this.$api.Auth.confirm({ confirmation_token });

        this.$store.dispatch("user/fetch");
        if(data.register_url) window.location.href = data.register_url;
        else this.$router.push("/");
      } catch (e) {
        this.$router.push("/");
        console.error(e);
      }
    }
