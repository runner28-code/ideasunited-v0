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
  },
  mounted() {
    this.player = new YouTubePlayer("youtube-player", {
      width: "100%",
      height: "100%",
      videoId: this.slide.youtube_id,
      playerVars: { rel: 0, controls: 0 }
    });

    if (this.newSlideSettings.started) this.play();

    this.player.on("stateChange", async event => {
      if (!this.started && event.data == 1) {
        this.started = true;
      }
    });
  },
  methods: {
    async play() {
      this.player.seekTo(this.newSlideSettings.time || 0);
      if (this.newSlideSettings.state == "play") {
        this.player.playVideo();
      }
      if (this.newSlideSettings.state == "pause") {
        this.player.pauseVideo();
      }
    }
