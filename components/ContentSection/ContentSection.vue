<template>
  <div
    :class="[{ disable_scroll: contentSection.disable_scroll }, `content-section--${contentSection.layout_style}`]"
    v-show="filteredBlocks.length"
