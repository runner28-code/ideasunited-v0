<template>
  <div class="timeline">
      :class="{ visible: visibleControls }"
      class="timeline__control"
      icon
      @click="swiperInstance.slidePrev()"
    >
