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
      <div
        class="eligible-preview"
      ></div>
      <div class="eligible-label">{{ badge.title }}</div>
    </a>
  </div>
