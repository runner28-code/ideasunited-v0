<template>
  <div class="marquee">
    <div ref="marqueetext" class="marquee-text" :style="animStyle">
      <slot></slot>
    </div>
</template>

<script>
export default {
  data() {
    return {
      seconds: 25,
      animating: false
    }
  },
  computed: {
    animStyle() {
      if (!this.animating) return ''
      return `
        animation: marquee-animation ${this.seconds}s linear infinite;
      `
    }
  },
  watch: {
    message: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          if (this.$refs.marqueetext) {
            this.seconds = this.$refs.marqueetext
              ? this.$refs.marqueetext.offsetWidth / 50
              : 25
