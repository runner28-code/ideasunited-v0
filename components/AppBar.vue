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
                color: menuItem.menu_button_text_color,
              }
            : {}
        "
      >
        <v-menu
          offset-y
          v-if="['relative', 'none'].includes(menuItem.url_type)"
        >
          <template v-slot:activator="{ on, attrs }">
            <component
              v-bind="attrs"
              v-on="on"
              :is="menuItem.url_type == 'relative' ? 'nuxt-link' : 'span'"
              :to="`#${menuItem.url}`"
              :class="{
                'menu-item-hidden': menuItem.menu_style == 'home_logo',
              }"
            >
              <span @click="menuClick(menuItem, idx)">{{
                menuItem.menu_title
              }}</span>
              <span class="menu-caret" v-if="menuItem.menus.length">▾</span>
            </component>
          </template>

          <v-list>
            <v-list-item
              @click="menuClick(menuItem, idx)"
              :to="menu.url"
              v-for="(menu, idx) in menuItem.menus"
              :key="idx"
              >{{ menu.menu_title }}</v-list-item
            >
          </v-list>
        </v-menu>
        <a
          v-else-if="menuItem.url_type == 'absolute'"
          target="_blank"
          :href="menuItem.absolute_url"
          >{{ menuItem.menu_title }}</a
        >
        <a
          @click.prevent="menuItem.onclick"
          v-else-if="menuItem.url_type == 'click'"
        >
          {{ menuItem.menu_title }}
        </a>
      </div>
      <div class="app-bar__nav-footer">
        <div
          :key="menuItem.id"
          v-for="menuItem in menuFooterPages"
          class="app-bar__nav-footer-item"
        >
          <a
            v-if="menuItem.url_type == 'absolute'"
            target="_blank"
            :href="menuItem.absolute_url"
            >{{ menuItem.footer_menu_title }}</a
          >
