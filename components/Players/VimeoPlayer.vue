<template>
  <iframe
    :src="`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoplay ? '1' : '0'}${vimeoH ? '&h=' + vimeoH : ''}`"
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
    autoplay: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.player = new this.$Vimeo(this.$refs.vimeo);
    this.player.on("ended", () => {
      this.$root.$emit("nextEvent");
    });
    this.player.getChapters().then(chapters => {
      this.chapters = chapters;
      if (this.vimeoChapter) this.goToChapter(this.vimeoChapter);
    });
    this.player.on("timeupdate", data => {
      const live_seconds = (Date.now() - this.releaseTime) / 1000;
      if (data.seconds > live_seconds) {
        this.player.setCurrentTime(live_seconds - 1);
      }
    });
    this.player.on("seeking", data => {
      const live_seconds = (Date.now() - this.firstStartAt) / 1000;
      if (data.seconds > live_seconds) {
        this.player.setCurrentTime(live_seconds - 1);
      }
    });
    this.player.on("chapterchange", data => {
      this.$root.$emit("chapterChange", {
