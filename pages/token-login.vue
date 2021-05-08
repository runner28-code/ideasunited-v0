<template>
  <div></div>
</template>

<script>
export default {
  created() {
    if (process.client) {
      const { token } = this.$route.query;
      if (token) {
        this.login(token);
