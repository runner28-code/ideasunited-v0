<template>
  <div v-if="currentPage" :class="`page-${currentPage.id}`">
    <PageLead v-if="currentPage.use_lead" />
    <div class="components">
      <div
        v-for="(component, idx) in currentPage.components"
        :key="idx"
      >
        <component
