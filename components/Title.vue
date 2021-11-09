<template>
  <component :style="styles" :is="tag" :class="tag">
    <slot></slot>
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
</script>

<style scoped lang="scss">
.h2,
.h1 {
  line-height: 1.1;
}

@media screen and (max-width: 944px) {
  .h1 {
