<template>
  <div class="eligibles">
    <a
      v-for="badge in value"
      :key="badge.id"
      class="eligible"
      :class="[`eligible--${badge.slug}`]"
      :href="badgeInfoUrl"
      target="_blank"
    >
        class="eligible-preview"
        :style="{ backgroundImage: `url(${badge.preview.url})` }"
      ></div>
      <div class="eligible-label">{{ badge.title }}</div>
    </a>
