<template>
  <div class="zoom-chat">
    <iframe
      frameborder="0"
      allow="autoplay; fullscreen"
      class="zoom-player__embedded"
      :src="zoomUrl"
      v-if="zoomUrl"
    />
  </div>
</template>

<script>
import { buildZoomLink } from "@/utils";
export default {
