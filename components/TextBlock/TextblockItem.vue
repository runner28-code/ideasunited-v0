<template>
  <component
    :is="item.link ? 'a' : 'div'"
    :href="item.link"
    target="_blank"
    class="text-block__item-wrapper"
    :style="styles"
  >
    <div
      :style="{ backgroundImage: `url(${item.preview.large.url})` }"
