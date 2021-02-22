<template>
  <div class="event-player" :style="styles">
    <YoutubePlayer
      v-if="event.event_type == 'youtube'"
      :youtubeId="event.youtube_id"
