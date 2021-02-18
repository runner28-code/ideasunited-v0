<template>
  <div v-if="currentPage" :class="`page-${currentPage.id}`">
    <PageLead v-if="currentPage.use_lead" />
    <div class="components">
      <div
        class="component"
        v-for="(component, idx) in currentPage.components"
        :key="idx"
