<template>
  <v-app-bar :style="headerStyles" class="app-bar" app fixed>
    <v-toolbar-title class="app-bar__start">
      <div @click="menuClick(menuPages[0], 0)">
        <nuxt-link :to="`#${homeHash}`" class="app-bar__logo">
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
      :style="{ color: activeTheme.primary_color }"
    >
      <div class="app-bar__dropdown-title">
        {{ activeGridMenuTitle || activeTheme.header_dropdown_placeholder }}
      </div>
      <div class="app-bar__dropdown-icon">
        <v-icon>$menu_down</v-icon>
      </div>
    </a>
    <div class="app-bar__nav">
      <div
        :key="menuItem.id"
        v-for="(menuItem, idx) in menuPages"
        class="app-bar__nav-item"
        :class="[
          `app-bar__nav-item--${menuItem.menu_style}`,
          `app-bar__nav-item-${menuItem.id}`,
        ]"
        :style="
          menuItem.menu_style == 'button'
            ? {
                backgroundColor: menuItem.menu_button_background,
