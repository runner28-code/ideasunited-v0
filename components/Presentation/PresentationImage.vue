<template>
  <div
    class="presentation-image"
    :style="{
      backgroundImage: `url(${slide.preview ? slide.preview.url : ''})`
    }"
  ></div>

<script>
export default {
  props: {
    slide: Object
  }
