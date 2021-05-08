<template>
  <div>
    <div class="zoom-player" v-if="event.zoom_player_type == 'browser'">
      <iframe
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        class="zoom-player__embedded"
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
        }}
        at
        {{
          event.start_at
            | moment("timezone", currentTimezone, "h:mm A")
        }}
      </div>
      <Button large @click="openZoomLink">Click to Connect</Button>
    </div>
  </div>
</template>
<script>
import { buildZoomLink } from "@/utils";

export default {
  name: "ZoomPlayer",
  props: {
    event: Object
  },
