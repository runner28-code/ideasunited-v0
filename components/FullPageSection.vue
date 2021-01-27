<template>
  <div class="page" :data-anchor="page.url">
    <v-responsive
      class="mobile-bglede"
      :aspect-ratio="375 / 304"
      :style="mobileBgLedeStyles"
    ></v-responsive>
    <div class="page-inner">
      <div class="components">
