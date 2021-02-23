<template>
  <div class="slider-modal-content content-block-info">
    <div
      v-if="block.content_type != 'new_tab'"
      class="slider-modal-content__side slider-modal-content__preview"
    >
      <v-responsive
        :aspect-ratio="block.content_type == 'video_player' && ['sm', 'xs'].includes($size) ? undefined : 1"
        class="slider-modal-content__preview-square"
      >
        <v-responsive
          v-if="block.content_type == 'video_player'"
          class="slider-modal-content__video"
          :aspect-ratio="16 / 9"
        >
          <VimeoPlayer
            v-if="block.video_player_type == 'vimeo'"
            :vimeoId="block.vimeo_id"
            :vimeoH="block.vimeo_h"
          />
          <YoutubePlayer
            v-else-if="block.video_player_type == 'youtube'"
            :youtubeId="block.youtube_id"
          />
          <ZoomPlayer
            v-else-if="block.video_player_type == 'zoom'"
            :zoomLink="block.zoom_url"
