<template>
  <div class="page-lead" :style="styles">
      <div class="page-lead__title" v-if="currentPage.lead_title">
        {{ currentPage.lead_title }}
