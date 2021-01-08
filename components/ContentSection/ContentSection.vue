<template>
  <div
    class="content-section"
    :class="[{ disable_scroll: contentSection.disable_scroll }, `content-section--${contentSection.layout_style}`]"
    v-show="filteredBlocks.length"
  >
    <Title class="content-section__title">
      <div v-html="contentSection.title "></div>
