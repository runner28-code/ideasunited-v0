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
            this.animating =
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.marquee {
  width: 100%;
  will-change: transform, margin-left;
  overflow-x: hidden;
  overflow-y: hidden;
  &-text {
    width: max-content;
  }
}
</style>

<style>
@keyframes marquee-animation {
  0% {
    transform: translate(0, 0);
    margin-left: 0;
  }
  100% {
    transform: translate(-100%, 0);
    margin-left: 100%;
  }
}
