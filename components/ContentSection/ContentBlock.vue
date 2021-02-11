<template>
  <transition name="fade">
      v-if="!hiding"
      :class="{
        'content-section-item--no-content':
          block.content_type == 'no_content'
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
        :aspect-ratio="285 / 160"
      ></v-responsive>
      <div class="content-section-item__text">
