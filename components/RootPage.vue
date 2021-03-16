<template>
  <div v-if="currentPage" :class="`page-${currentPage.id}`">
    <div class="components">
      <div
        class="component"
        v-for="(component, idx) in currentPage.components"
        :key="idx"
      >
        <component
          :value="component.resource_id"
