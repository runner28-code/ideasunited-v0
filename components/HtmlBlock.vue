<template>
  <div v-html="htmlBlock.html"></div>
</template>

<script>
  props: {
    value: String,
    page: Object,
  },
