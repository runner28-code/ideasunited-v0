<template>
  <iframe
    :src="`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoplay ? '1' : '0'}${vimeoH ? '&h=' + vimeoH : ''}`"
    frameborder="0"
    allow="autoplay; fullscreen"
    allowfullscreen
    class="vimeo-player"
  ></iframe>
</template>

<script>
export default {
  name: "VimeoPlayer",
  props: {
    vimeoId: [String, Number],
