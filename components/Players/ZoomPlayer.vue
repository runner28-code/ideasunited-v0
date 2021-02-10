<template>
  <div>
    <div class="zoom-player" v-if="event.zoom_player_type == 'browser'">
      <iframe
        allow="autoplay; fullscreen"
        allowfullscreen
        class="zoom-player__embedded"
        :src="zoomUrl"
        v-if="zoomUrl"
      />
