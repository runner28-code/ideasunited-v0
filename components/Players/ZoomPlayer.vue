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
  data() {
    return {
      zoomUrl: null
    };
  },
  created() {
    this.fetchSignature();
  },
  methods: {
    openZoomLink() {
      window.open(this.event.zoom_url, "_blank");
    },
    async fetchSignature() {
      const { zoom_id, zoom_password } = this.event;
      const { full_name, email } = this.currentUser || {};

      this.zoomUrl = await buildZoomLink({
        $api: this.$api,
        zoom_id,
        zoom_password,
        full_name,
      });
    }
  },
};
</script>

<style scoped lang="scss">
.zoom-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;

  &__title {
    font-weight: 500;
    font-size: 48px;
    margin-bottom: 10px;
  }
  &__subtitle {
    font-weight: 500;
    font-size: 28px;
    line-height: 1.143;
    margin-bottom: 10px;
  }

  &__embedded {
    width: 100%;
