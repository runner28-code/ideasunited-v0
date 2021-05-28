<template>
  <div class="marquee">
    <div ref="marqueetext" class="marquee-text" :style="animStyle">
      <slot></slot>
    </div>
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
  watch: {
