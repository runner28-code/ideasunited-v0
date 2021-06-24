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
