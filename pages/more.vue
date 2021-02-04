<template>
  <div class="grid-menu">
    <v-responsive
      v-for="item in gridMenuPages"
      :key="item.id"
      class="grid-menu__item"
      :aspect-ratio="320 / 180"
      :style="{
