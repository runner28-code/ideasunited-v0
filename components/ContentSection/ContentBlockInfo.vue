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
