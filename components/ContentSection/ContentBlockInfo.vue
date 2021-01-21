<template>
  <div class="slider-modal-content content-block-info">
    <div
      v-if="block.content_type != 'new_tab'"
      class="slider-modal-content__side slider-modal-content__preview"
    >
      <v-responsive
