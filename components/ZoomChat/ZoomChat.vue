<template>
  <div class="zoom-chat">
    <iframe
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
      class="zoom-player__embedded"
      :src="zoomUrl"
      v-if="zoomUrl"
    />
  </div>
</template>

<script>
import { buildZoomLink } from "@/utils";
export default {
  props: {
    chat: Object
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
    async fetchSignature() {
      const { zoom_id, zoom_password } = this.chat;
      const { full_name, email } = this.currentUser || {};

      this.zoomUrl = await buildZoomLink({
        $api: this.$api,
        zoom_id,
        zoom_password,
        full_name,
        email
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.zoom-chat {
  height: 100%;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
