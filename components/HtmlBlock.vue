<template>
</template>

<script>
export default {
  props: {
    value: String,
    page: Object,
  },
  computed: {
    htmlBlock() {
      return (this.page || this.currentPage).html_blocks[this.value];
    }
  }
