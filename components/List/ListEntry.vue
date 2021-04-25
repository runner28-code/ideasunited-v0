<template>
  <div class="list-entry">
    <div
      v-if="entry.preview.thumb.url"
      :style="{ backgroundImage: `url(${entry.preview.thumb.url})` }"
      class="list-entry__preview"
    ></div>
    <div class="list-entry__content">
      <div
        class="list-entry__title"
      >
        {{ entry.title }}
      </div>
      <div class="list-entry__subtitle" v-html="entry.subtitle"></div>
    </div>
  </div>
</template>
