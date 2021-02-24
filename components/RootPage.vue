<template>
    <PageLead v-if="currentPage.use_lead" />
    <div class="components">
      <div
        class="component"
        v-for="(component, idx) in currentPage.components"
        :key="idx"
      >
        <component
