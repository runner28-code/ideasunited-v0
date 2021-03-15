<template>
  <div class="eligibles">
    <a
      :key="badge.id"
      class="eligible"
      :class="[`eligible--${badge.slug}`]"
      :href="badgeInfoUrl"
      target="_blank"
    >
      <div
        class="eligible-preview"
