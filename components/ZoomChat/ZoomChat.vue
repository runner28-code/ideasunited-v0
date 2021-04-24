<template>
  <div class="zoom-chat">
    <iframe
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
