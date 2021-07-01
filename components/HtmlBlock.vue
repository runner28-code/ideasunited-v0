<template>
  <div v-html="htmlBlock.html"></div>
</template>

<script>
export default {
  props: {
    value: String,
