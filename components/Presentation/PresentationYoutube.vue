<template>
  <div class="youtube-player">
    <div id="youtube-player"></div>
    <div class="youtube-player__after" @click="started ? null : play"></div>
  </div>
</template>

import YouTubePlayer from "youtube-player";
export default {
  props: {
    slide: Object,
    presentation: Object
  },
