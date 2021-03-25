<template>
  <div class="list-entry">
    <div
      v-if="entry.preview.thumb.url"
      :style="{ backgroundImage: `url(${entry.preview.thumb.url})` }"
      class="list-entry__preview"
    ></div>
      <div
        :style="{ color: activeTheme.primary_color }"
        class="list-entry__title"
      >
        {{ entry.title }}
      </div>
