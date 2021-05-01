<template>
  <div class="slider-wrapper">
      <v-icon color="#ffffff" size="50">$chevron_left</v-icon>
    </div>
    <div class="swiper-button-next">
      <v-icon color="#ffffff" size="50">$chevron_right</v-icon>
    </div>
    <swiper class="slider" :options="swiperOption">
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <div
          @click="slideClick(slide)"
          class="slider__slide"
          :class="{ clickable: slide.url }"
          :style="{ backgroundImage: `url(${slide.preview.large.url})` }"
        ></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
