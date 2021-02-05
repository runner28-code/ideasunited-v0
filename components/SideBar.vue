<template>
  <v-navigation-drawer
    close-on-click
    right
    :value="value"
    @input="$emit('input', $event)"
    class="rightsidebar"
    hide-overlay
    absolute
    :width="drawerWidth"
    touchless
  >
    <v-btn icon class="rightsidebar__close" @click="$emit('input', false)">
      <v-icon size="36">$close</v-icon>
    </v-btn>
    <v-list dense>
      <v-list-item
        v-for="(menuItem, idx) in menuPages"
        :key="menuItem.id"
        class="rightsidebar__item rightsidebar__item-mobile"
        :to="`#${menuItem.url}`"
        v-ripple="false"
      >
        <span @click="menuClick(menuItem, idx)">
          {{ menuItem.menu_title }}
        </span>
      </v-list-item>
      <v-list-item
        v-for="(menuItem, idx) in menuFooterPages"
        :key="menuItem.id"
        class="rightsidebar__item-small rightsidebar__item-mobile"
        :to="`#${menuItem.url}`"
        v-ripple="false"
      >
