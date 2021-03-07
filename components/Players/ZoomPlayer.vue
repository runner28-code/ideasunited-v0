<template>
  <div>
    <div class="zoom-player" v-if="event.zoom_player_type == 'browser'">
      <iframe
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        :src="zoomUrl"
        v-if="zoomUrl"
      />
    </div>
    <div class="zoom-player" v-else-if="event.zoom_player_type == 'desktop'">
      <div class="zoom-player__title">{{ event.title }}</div>
      <div class="zoom-player__subtitle" v-if="event.start_at">
        {{
          event.start_at
            | moment("timezone", currentTimezone, "dddd M/D/YYYY")
