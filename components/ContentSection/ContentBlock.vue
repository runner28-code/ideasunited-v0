<template>
  <transition name="fade">
    <div class="content-section-item"
      v-if="!hiding"
      :class="{
        'content-section-item--no-content':
      }"
    >
      <v-responsive
        @click="openDialog"
        class="content-section-item__wrapper"
        :class="{
          'content-section-item__wrapper--video':
            block.content_type == 'video_player'
        }"
        :style="styles"
