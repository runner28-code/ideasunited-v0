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
