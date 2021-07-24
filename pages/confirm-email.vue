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
      try {
        const { data } = await this.$api.Auth.confirm({ confirmation_token });

