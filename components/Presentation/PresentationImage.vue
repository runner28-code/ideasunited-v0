<template>
  <div
    class="presentation-image"
    :style="{
      backgroundImage: `url(${slide.preview ? slide.preview.url : ''})`
    }"
  ></div>
</template>

<script>
  props: {
    slide: Object
  }
};
</script>

<style lang="scss" scoped>
.presentation-image {
