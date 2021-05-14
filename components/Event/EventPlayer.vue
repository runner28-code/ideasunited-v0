<template>
  <div class="event-player" :style="styles">
    <YoutubePlayer
      v-if="event.event_type == 'youtube'"
      :youtubeId="event.youtube_id"
      :key="event.id"
    />
    <VimeoPlayer
      v-else-if="event.event_type == 'vimeo'"
      :vimeoChapter="event.vimeo_chapter"
      :vimeoId="event.vimeo_id"
    />
    <ZoomPlayer
      v-else-if="event.event_type == 'zoom'"
      :zoomLink="event.zoom_url"
      :startAt="event.start_at"
      :event="event"
      :title="event.title"
      :key="event.id"
    />
    <Slider
