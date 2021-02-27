<template>
  <div
    @click="onclick"
    :class="{ clickable: item.event, dark: item.dark }"
    :style="styles"
