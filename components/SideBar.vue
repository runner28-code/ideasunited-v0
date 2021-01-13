<template>
  <v-navigation-drawer
    close-on-click
    right
    @input="$emit('input', $event)"
    class="rightsidebar"
    hide-overlay
    absolute
    :width="drawerWidth"
    touchless
