<template>
  <div>
    <v-app-bar
      class="elevation-0 app-bar"
      color="primary"
      app
      clipped-left
    >
      <v-toolbar-title class="toolbar-title">
        <router-link to="/" class="logo-link">
          <img :src="isProduction() ? whiteLogo : redLogo" width="258" alt="Logo" />
        </router-link>
