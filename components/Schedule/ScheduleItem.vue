<template>
  <div
    class="schedule-item"
    :class="{ clickable: item.event, dark: item.dark }"
    :style="styles"
