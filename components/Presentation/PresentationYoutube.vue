<template>
  <div class="youtube-player">
    <div id="youtube-player"></div>
    <div class="youtube-player__after" @click="started ? null : play"></div>
  </div>
</template>

<script>
import YouTubePlayer from "youtube-player";
export default {
  props: {
    slide: Object,
    presentation: Object
  },
  data() {
    return { started: false };
  },
  mounted() {
    this.player = new YouTubePlayer("youtube-player", {
