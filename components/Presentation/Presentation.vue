<template>
  <div
    class="presentation"
    v-if="presentation.broadcasting"
    :key="presentation.active_slide.id"
  >
      :presentation="presentation"
