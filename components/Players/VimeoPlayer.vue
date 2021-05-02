<template>
  <iframe
    frameborder="0"
    allow="autoplay; fullscreen"
    allowfullscreen
    class="vimeo-player"
    ref="vimeo"
  ></iframe>
</template>

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
      default: true,
    },
  },
