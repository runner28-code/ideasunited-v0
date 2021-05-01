<template>
  <div></div>
</template>

<script>
  layout: 'simple',
  created() {
    if (process.client) this.confirm();
