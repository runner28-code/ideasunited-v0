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
