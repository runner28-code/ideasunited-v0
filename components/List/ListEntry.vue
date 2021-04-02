<template>
  <div class="list-entry">
    <div
      :style="{ backgroundImage: `url(${entry.preview.thumb.url})` }"
      class="list-entry__preview"
    ></div>
    <div class="list-entry__content">
      <div
        :style="{ color: activeTheme.primary_color }"
        class="list-entry__title"
      >
        {{ entry.title }}
      </div>
