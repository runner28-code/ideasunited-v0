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
