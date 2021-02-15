<template>
  <div class="grid-menu">
    <v-responsive
      :key="item.id"
      class="grid-menu__item"
      :aspect-ratio="320 / 180"
      :style="{
        backgroundImage: item.grid_menu_image.url
          ? `url(${item.grid_menu_image.large.url})`
          : ''
