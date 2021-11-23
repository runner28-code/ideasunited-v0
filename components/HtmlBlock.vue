<template>
  <div v-html="htmlBlock.html"></div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  computed: {
    htmlBlock() {
      return (this.page || this.currentPage).html_blocks[this.value];
    }
  }
};
