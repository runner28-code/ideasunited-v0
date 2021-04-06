<template>
  <div
    class="presentation"
    v-if="presentation.broadcasting"
    :key="presentation.active_slide.id"
    <PresentationImage
      :presentation="presentation"
      :slide="presentation.active_slide"
