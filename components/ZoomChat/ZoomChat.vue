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
        email
      });
    }
  }
