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
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <transition name="fade">
        <div
          class="app-bar__new-opps"
          @click.stop="goToOpps()"
          v-if="newOpps.length && showNewOpps"
        >
          New opportunities just dropped!
          <v-btn
