<template>
  <div class="page-lead" :style="styles">
    <div class="page-lead__content">
      <div class="page-lead__title" v-if="currentPage.lead_title">
        {{ currentPage.lead_title }}
      </div>
      <div
        v-if="currentPage.lead_description"
        v-html="currentPage.lead_description"
      ></div>

      <Button
        v-if="currentPage.lead_button_text"
        x-large
