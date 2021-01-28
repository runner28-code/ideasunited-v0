<template>
  <transition name="fade">
    <div class="content-section-item"
      v-if="!hiding"
      :class="{
        'content-section-item--no-content':
          block.content_type == 'no_content'
      }"
    >
