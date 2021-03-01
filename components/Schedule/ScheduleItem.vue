<template>
  <div
    @click="onclick"
    class="schedule-item"
    :class="{ clickable: item.event, dark: item.dark }"
    :style="styles"
  >
    <div class="schedule-item__start-at">
