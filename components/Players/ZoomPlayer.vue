<template>
  <div>
    <div class="zoom-player" v-if="event.zoom_player_type == 'browser'">
      <iframe
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        class="zoom-player__embedded"
        :src="zoomUrl"
