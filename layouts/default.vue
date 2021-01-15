<template>
  <v-app
    v-if="currentProject"
    class="evp-app"
  >
    <client-only>
      <div class="account-menu-toggle">
        <v-btn @click.stop="accountMenuClick" icon>
          <v-icon size="38">{{ "$account_menu" }}</v-icon>
