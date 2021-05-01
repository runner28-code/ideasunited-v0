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

import Player from "@vimeo/player";

export default {
  props: {
    slide: Object,
    presentation: Object
