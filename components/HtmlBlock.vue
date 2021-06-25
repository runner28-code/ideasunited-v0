<template>
  <div v-html="htmlBlock.html"></div>

<script>
export default {
  props: {
    value: String,
