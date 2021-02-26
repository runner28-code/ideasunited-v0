<template>
    <div class="page-lead__content">
      <div class="page-lead__title" v-if="currentPage.lead_title">
        {{ currentPage.lead_title }}
      </div>
      <div
        v-if="currentPage.lead_description"
        class="page-lead__description"
        v-html="currentPage.lead_description"
      ></div>
