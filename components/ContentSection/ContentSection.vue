<template>
  <div
    class="content-section"
    :class="[{ disable_scroll: contentSection.disable_scroll }, `content-section--${contentSection.layout_style}`]"
    v-show="filteredBlocks.length"
  >
    <Title class="content-section__title">
      <div v-html="contentSection.title "></div>
      <a
        :style="{ color: activeTheme.primary_color }"
        class="content-section__more"
        v-if="contentSection.more_link_url && contentSection.more_link_text"
        :href="contentSection.more_link_url | url"
      >
        <span>
          {{ contentSection.more_link_text }}
        </span>
        <v-icon size="30" :color="activeTheme.primary_color"
          >$chevron_right</v-icon
        >
      </a>
      <div class="content-section__title__underline" v-rellax="{speed: -0.25, center: true, percentage: 0.5}"></div>
    </Title>
    <div v-if="contentSection.subtitle" class="content-section__subtitle">
      {{ contentSection.subtitle }}
    </div>
    <div class="content-section__blocks" v-if="contentSection.disable_scroll">
      <ContentBlock
        v-for="(block, index) in filteredBlocks"
        :key="block.id"
        :nextId="getId(index + 1)"
        :prevId="getId(index - 1)"
        :block="block"
        :hiding="hideBlock(index)"
      />
    </div>
    <div class="content-section__swiper-wrapper" v-else>
      <v-btn
        :class="{ visible: visibleControls }"
        class="content-section__control content-section__control-prev"
        icon
        @click="swiperInstance.slidePrev()"
      >
        <v-icon size="40">$chevron_left</v-icon>
      </v-btn>
      <swiper
        ref="swiper"
        class="content-section__swiper"
        :options="swiperOption"
      >
        <swiper-slide
          class="content-section__swiper-slide"
          v-for="(block, index) in filteredBlocks"
          :key="block.id"
        >
          <ContentBlock
            :nextId="getId(index + 1)"
            :prevId="getId(index - 1)"
            :block="block"
          />
        </swiper-slide>
      </swiper>
      <v-btn
        :class="{ visible: visibleControls }"
        class="content-section__control content-section__control-next"
        icon
        @click="swiperInstance.slideNext()"
      >
        <v-icon size="40">$chevron_right</v-icon>
      </v-btn>
    </div>
    <div
      class="content-section__view-more"
      @click="toggleViewMore"
      v-show="filteredBlocks.length > 4"
    >
      <v-icon v-show="viewMore">$chevron_up</v-icon>
      <v-icon v-show="!viewMore">$chevron_down</v-icon>
    </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "ContentSection",
  props: {
    resource_id: String,
    page: Object,
  },
  data() {
    return {
      swiperOption: {
        speed: 400,
        keyboard: {
          enabled: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1264: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }
      },
      timeouts: {},
      viewMore: false
    };
  },
  mounted() {
    const { swiper } = this.$refs;
    if (swiper) {
      this.swiperInstance = this.$refs.swiper.swiperInstance;
    }
    this.checkPosted();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize')); // get rellax to refresh after content loaded.
    }, 1000);
  },
  computed: {
    contentSection() {
      return (this.page || this.currentPage).content_sections[this.resource_id];
    },
    filteredBlocks() {
      return this.contentSection.blocks.filter(
        b =>
