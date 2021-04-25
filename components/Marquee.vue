<template>
  <div class="marquee">
    <div ref="marqueetext" class="marquee-text" :style="animStyle">
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
