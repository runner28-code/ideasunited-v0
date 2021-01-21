<template>
  <v-app
    v-if="currentProject"
    class="evp-app"
    :class="{ authorized: currentUser, not_authorized: !currentUser }"
  >
    <client-only>
      <div class="account-menu-toggle">
        <v-btn @click.stop="accountMenuClick" icon>
          <transition name="fade">
            <div
