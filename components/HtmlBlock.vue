<template>
  <div v-html="htmlBlock.html"></div>
</template>

<script>
  props: {
    value: String,
    page: Object,
  },
  computed: {
    htmlBlock() {
      return (this.page || this.currentPage).html_blocks[this.value];
