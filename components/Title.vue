<template>
  <component :style="styles" :is="tag" :class="tag">
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: "h2"
    }
  },
  computed: {
    styles() {
