<template>
  <div class="marquee">
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
