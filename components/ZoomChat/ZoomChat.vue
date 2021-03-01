<template>
  <div class="zoom-chat">
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
      class="zoom-player__embedded"
      :src="zoomUrl"
      v-if="zoomUrl"
