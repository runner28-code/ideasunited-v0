<template>
</template>

<script>
export default {
  layout: 'simple',
  created() {
    if (process.client) this.confirm();
  },
