<template>
  <component :style="styles" :is="tag" :class="tag">
    <slot></slot>
  </component>

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
      return {
        fontWeight: font.weight,
        fontStyle: font.style,
        fontSize: font.size + "px",
        textTransform: font.case,
        letterSpacing: font.letter_spacing + "px"
      };
    }
  }
};
