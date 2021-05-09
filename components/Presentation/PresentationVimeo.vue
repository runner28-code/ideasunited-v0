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
