<template>
  <div v-html="htmlBlock.html"></div>
</template>

<script>
export default {
  props: {
    value: String,
    page: Object,
  },
  computed: {
      return (this.page || this.currentPage).html_blocks[this.value];
    }
