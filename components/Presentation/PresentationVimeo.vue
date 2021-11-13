<template>
  <div class="vimeo-player">
    <iframe
      :src="`https://player.vimeo.com/video/${slide.vimeo_id}?controls=0`"
      frameborder="0"
      allow="fullscreen"
      allowfullscreen
      ref="vimeo"
    ></iframe>
    <div class="vimeo-player-overlay" @click="started ? null : play()"></div>
  </div>
</template>

<script>
import Player from "@vimeo/player";

export default {
  props: {
    slide: Object,
    presentation: Object
  },
  data() {
    return {
      started: false
    };
  },
  mounted() {
    this.player = new Player(this.$refs.vimeo);

    this.player.on("play", async () => {
      this.started = true;
    });

    this.play();
  },
  methods: {
    async play() {
      this.player.setCurrentTime(this.newSlideSettings.time || 0);
      this.player.setVolume(0.6);
      this.player.play();
    }
  },
  computed: {
    newSlideSettings() {
      return this.presentation.settings[this.slide.id] || {};
    }
  },
  watch: {
    presentation: {
      deep: true,
      handler(newVal, oldVal) {
        if (this.newSlideSettings.started && this.player) {
          this.play();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.vimeo-player {
  height: 100%;
  position: relative;
  background: black;

  &-overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
