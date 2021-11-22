<template>
  <div
    class="presentation-image"
    :style="{
      backgroundImage: `url(${slide.preview ? slide.preview.url : ''})`
    }"
  ></div>
</template>

<script>
export default {
  props: {
    slide: Object
  }
};
</script>

<style lang="scss" scoped>
.presentation-image {
  width: 100%;
  height: 100%;
  background-position: center center;
