<template>
  <div
    @click="onclick"
    class="schedule-item"
    :class="{ clickable: item.event, dark: item.dark }"
    :style="styles"
  >
    <div class="schedule-item__start-at">
      {{
      }}
    </div>
    <div class="schedule-item__content">
      <Title class="schedule-item__title">{{ item.title }}</Title>
      <div
        v-if="item.description"
        class="schedule-item__description"
