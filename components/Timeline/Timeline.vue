<template>
  <div class="timeline">
    <v-btn
      :class="{ visible: visibleControls }"
      class="timeline__control"
      icon
      @click="swiperInstance.slidePrev()"
    >
      <v-icon size="40">$chevron_left</v-icon>
    </v-btn>
      <swiper-slide
        class="timeline__swiper-slide"
        v-for="event in timelineEvents"
        :key="event.id"
