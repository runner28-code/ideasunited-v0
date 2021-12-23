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
  height: 100%;
  background-position: center center;
  background-size: contain;
}
