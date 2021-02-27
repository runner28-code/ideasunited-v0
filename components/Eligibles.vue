<template>
  <div class="eligibles">
    <a
      v-for="badge in value"
      :key="badge.id"
      class="eligible"
      :href="badgeInfoUrl"
      target="_blank"
    >
      <div
