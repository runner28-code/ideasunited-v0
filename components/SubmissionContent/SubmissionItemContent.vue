<template>
  <div class="slider-modal-content submission-item-content">
    <div
      v-if="value && (value.preview.url || value.youtube_id || value.vimeo_id)"
      class="slider-modal-content__side slider-modal-content__preview"
    >
      <v-responsive
        class="slider-modal-content__video"
        :aspect-ratio="480 / 280"
        v-if="value.youtube_id || value.vimeo_id"
      >
        <VimeoPlayer v-if="value.vimeo_id" :vimeoId="value.vimeo_id" />
        <YoutubePlayer
          v-else-if="value.youtube_id"
          :youtubeId="value.youtube_id"
        />
      </v-responsive>
      <img v-else :src="value.preview.large.url" width="100%" />
    </div>
    <div
      class="slider-modal-content__side slider-modal-content__content"
      v-if="content.length"
    >
      <div>
        <div
