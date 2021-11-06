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
      v-else-if="event.event_type == 'slideshow'"
      :slides="event.slides"
    />
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  },
  computed: {
    styles() {
      const url =
        this.event.background?.large?.url ||
        this.activeTheme.event_background.large.url;
      return {
        backgroundImage: `url(${url})`
      };
    }
  }
};
</script>

<style scoped lang="scss">
.event-player {
  position: relative;
  height: 100%;
  background-color: black;
  background-size: cover;
  background-position: center;
