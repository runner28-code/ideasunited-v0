<template>
  <div></div>
</template>

<script>
export default {
  layout: 'simple',
    if (process.client) this.confirm();
  },
  methods: {
    async confirm() {
      const { confirmation_token } = this.$route.query;
