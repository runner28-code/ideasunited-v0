<template>
  <div>
    <div
      v-if="fullpageReady"
      class="opportunity-page"
      :class="`opportunity-${currentProject.id}`"
    >
      <transition name="fade">
        <div
          class="background-lede"
          :style="backgroundLedeStyles"
          :key="currentSlide"
        >
          <div
            class="background-lede__logo"
            v-if="opportunityLogo && !currentProject.hide_frontend_logo"
          >
            <img :src="opportunityLogo" alt="Logo" />
          </div>
        </div>
      </transition>
      <div class="fullpage-outer-container">
        <div class="fullpage-container">
          <no-ssr>
            <full-page
              :options="fullpageOpts"
              ref="fullpage"
              id="fullpage"
              :skip-init="true"
            >
              <FullPageSection
                v-for="(page, idx) in currentProject.menu_pages"
                :key="idx"
                :page="page"
                :idx="idx"
                @next="fullPageMoveNext(idx)"
