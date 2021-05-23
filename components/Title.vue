<template>
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
      if(!this.activeTheme) return {};
      const font = this.activeTheme[`${this.tag}_font`];
