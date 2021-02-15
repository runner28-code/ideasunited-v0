<template>
  <div class="page" :data-anchor="page.url">
    <v-responsive
      class="mobile-bglede"
      :aspect-ratio="375 / 304"
      :style="mobileBgLedeStyles"
    ></v-responsive>
    <div class="page-inner">
      <div class="components">
        <div class="component content-header-component" v-if="page.content_header || page.content_subhead">
          <div class="fullpage-section__header">
            <h1 v-if="page.content_header" v-html="page.content_header"></h1>
            <h2 v-if="page.content_subhead" v-html="page.content_subhead"></h2>
          </div>
        <div
          class="component"
          v-for="component in page.components"
          :key="component.resource_id"
        >
