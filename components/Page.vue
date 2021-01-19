<template>
  <div>
      v-if="fullpageReady"
      class="opportunity-page"
      :class="`opportunity-${currentProject.id}`"
    >
      <transition name="fade">
        <div
          class="background-lede"
          :style="backgroundLedeStyles"
          :key="currentSlide"
