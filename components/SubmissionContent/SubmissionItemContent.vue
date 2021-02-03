<template>
  <div class="slider-modal-content submission-item-content">
    <div
      v-if="value && (value.preview.url || value.youtube_id || value.vimeo_id)"
      class="slider-modal-content__side slider-modal-content__preview"
    >
