<template>
  <transition name="fade">
    <div class="content-section-item"
      v-if="!hiding"
      :class="{
          block.content_type == 'no_content'
      }"
