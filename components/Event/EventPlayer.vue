<template>
  <div class="event-player" :style="styles">
    <YoutubePlayer
      v-if="event.event_type == 'youtube'"
      :youtubeId="event.youtube_id"
      :key="event.id"
    />
    <VimeoPlayer
      :key="event.id"
      v-else-if="event.event_type == 'vimeo'"
      :vimeoChapter="event.vimeo_chapter"
    />
    <ZoomPlayer
      v-else-if="event.event_type == 'zoom'"
      :zoomLink="event.zoom_url"
