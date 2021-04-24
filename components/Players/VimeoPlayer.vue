<template>
  <iframe
    :src="`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoplay ? '1' : '0'}${vimeoH ? '&h=' + vimeoH : ''}`"
    frameborder="0"
    allow="autoplay; fullscreen"
    allowfullscreen
    class="vimeo-player"
    ref="vimeo"
  ></iframe>

<script>
export default {
  name: "VimeoPlayer",
  props: {
    vimeoId: [String, Number],
    vimeoH: [String, Number],
    vimeoChapter: [String, Number],
    firstStartAt: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Boolean,
