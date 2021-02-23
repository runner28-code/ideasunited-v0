<template>
  <div class="event-player" :style="styles">
    <YoutubePlayer
      v-if="event.event_type == 'youtube'"
      :key="event.id"
