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
