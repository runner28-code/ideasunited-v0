<template>
  <v-app-bar :style="headerStyles" class="app-bar" app fixed>
    <v-toolbar-title class="app-bar__start">
      <div @click="menuClick(menuPages[0], 0)">
          <img
            v-if="logo && !currentProject.hide_frontend_logo"
            :src="logo"
            alt="Logo"
          />
        </nuxt-link>
      </div>
    </v-toolbar-title>
    <a
      href="/more"
      @click.prevent="dropdownClick"
      v-if="gridMenuPages.length"
      class="app-bar__dropdown"
