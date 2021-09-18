<template>
  <iframe
    class="youtube-player"
    width="560"
    height="315"
    :src="`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`"
    frameborder="0"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  name: "YoutubePlayer",
  props: {
    youtubeId: String
  }
};
</script>

<style scoped lang="scss">
