<template>
  <div class="slider-modal-content content-block-info">
    <div
      class="slider-modal-content__side slider-modal-content__preview"
    >
      <v-responsive
        :aspect-ratio="block.content_type == 'video_player' && ['sm', 'xs'].includes($size) ? undefined : 1"
