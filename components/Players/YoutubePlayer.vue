<template>
  <iframe
    class="youtube-player"
    width="560"
    height="315"
    :src="`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>

<script>
export default {
  name: "YoutubePlayer",
  props: {
    youtubeId: String
  }
};
</script>

<style scoped lang="scss">
.youtube-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
