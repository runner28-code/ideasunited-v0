<template>
  <div
    class="content-section"
    :class="[{ disable_scroll: contentSection.disable_scroll }, `content-section--${contentSection.layout_style}`]"
