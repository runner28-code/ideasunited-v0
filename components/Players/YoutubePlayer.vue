<template>
  <iframe
    class="youtube-player"
    height="315"
    :src="`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  name: "YoutubePlayer",
