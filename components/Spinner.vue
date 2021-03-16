<template>
  <client-only>
    <div class="spinner" :class="{ relative }">
      <HollowDotsSpinner
        :size="100"
        :color="activeTheme.primary_color"
