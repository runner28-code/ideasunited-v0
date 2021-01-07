<template>
  <div class="root-lede" :class="{fullscreen, playing}">
    <div class="root-lede__preview">
      <div class="root-lede__preview-content">
        <div class="root-lede__preview-media-wrapper">
          <div
            class="root-lede__preview-media-wrapper-doodle"
            v-rellax="{speed: ['sm', 'xs'].includes($size) ? 0.5 : 3, center: true, percentage: 0.5}"
          ></div>
          <div class="root-lede__preview-media" ref="previewMedia"
            :class="{'iris-loaded': mounted}"
