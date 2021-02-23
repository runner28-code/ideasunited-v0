<template>
    <div
      v-if="entry.preview.thumb.url"
      :style="{ backgroundImage: `url(${entry.preview.thumb.url})` }"
      class="list-entry__preview"
    ></div>
    <div class="list-entry__content">
      <div
        :style="{ color: activeTheme.primary_color }"
