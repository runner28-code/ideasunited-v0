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
