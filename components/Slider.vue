<template>
  <div class="slider-wrapper">
    <div class="swiper-button-prev">
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
export default {
  props: {
    slides: Array
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        // autoplay: {
        //   delay: 5000
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    slideClick(slide) {
      if (slide.url) {
        window.open(slide.url, slide.open_url || "_blank");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  &-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;

    .swiper-button-prev:after, .swiper-button-next:after {
      display: none;
    }
  }
  &__slide {
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;

    &.clickable {
    }
  }
