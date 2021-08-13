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
