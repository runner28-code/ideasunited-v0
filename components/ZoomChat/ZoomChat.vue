<template>
  <div class="zoom-chat">
    <iframe
      frameborder="0"
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
