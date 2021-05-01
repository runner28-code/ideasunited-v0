<template>
  <div class="marquee">
    <div ref="marqueetext" class="marquee-text" :style="animStyle">
      <slot></slot>
    </div>
  </div>

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
