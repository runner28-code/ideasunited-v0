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
    <swiper ref="swiper" class="timeline__swiper" :options="swiperOption">
      <swiper-slide
        class="timeline__swiper-slide"
        v-for="event in timelineEvents"
        :key="event.id"
        :class="{ posted: event.posted }"
      >
        <TimelineSlide @setActive="setActive" :active="value" :value="event" />
      </swiper-slide>
    </swiper>

    <v-btn
      :class="{ visible: visibleControls }"
      class="timeline__control"
