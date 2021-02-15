<template>
  <div class="eligibles">
    <a
      v-for="badge in value"
      :key="badge.id"
      class="eligible"
      :class="[`eligible--${badge.slug}`]"
