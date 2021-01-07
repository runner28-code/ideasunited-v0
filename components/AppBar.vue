<template>
  <v-app-bar :style="headerStyles" class="app-bar" app fixed>
    <v-toolbar-title class="app-bar__start">
      <div @click="menuClick(menuPages[0], 0)">
        <nuxt-link :to="`#${homeHash}`" class="app-bar__logo">
          <img
            v-if="logo && !currentProject.hide_frontend_logo"
            :src="logo"
