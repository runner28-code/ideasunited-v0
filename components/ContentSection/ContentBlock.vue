<template>
  <transition name="fade">
      v-if="!hiding"
      :class="{
        'content-section-item--no-content':
          block.content_type == 'no_content'
      }"
    >
