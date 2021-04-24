<template>
  <div
    class="presentation"
    v-if="presentation.broadcasting"
    :key="presentation.active_slide.id"
  >
      :presentation="presentation"
      :slide="presentation.active_slide"
      v-if="presentation.active_slide.slide_type == 'image'"
    />
