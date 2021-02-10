<template>
  <div>
    <v-app-bar
      class="elevation-0 app-bar"
      :height="['sm', 'xs'].includes($size) ? 70 : 83"
      color="primary"
      app
      clipped-left
    >
      <v-toolbar-title class="toolbar-title">
        <router-link to="/" class="logo-link">
          <img :src="isProduction() ? whiteLogo : redLogo" width="258" alt="Logo" />
        </router-link>
      <v-spacer></v-spacer>
      <transition name="fade">
        <div
          class="app-bar__new-opps"
          @click.stop="goToOpps()"
          v-if="newOpps.length && showNewOpps"
        >
          New opportunities just dropped!
          <v-btn
            icon
            class="app-bar__new-opps__close"
            @click.stop="showNewOpps = false"
            small
          >
            <v-icon size="20" color="white">$close</v-icon>
          </v-btn>
        </div>
      </transition>

      <v-btn icon @click="$emit('toggleSidebar')" class="app-bar__menu">
        <v-icon size="34" color="white">$account_menu</v-icon>
        <transition name="fade">
          <div
            v-if="newOpps.length"
            class="app-bar__menu__opp-count"
