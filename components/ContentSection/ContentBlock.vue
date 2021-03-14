<template>
  <transition name="fade">
    <div class="content-section-item"
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
        <div class="content-section-item__title">{{ block.title }}</div>
        <div class="content-section-item__subtitle">{{ block.subtitle }}</div>
      </div>

      <div
        class="content-section-item__icon"
      >
        <v-icon :color="activeTheme.primary_color" size="28">$play</v-icon>
      </div>

