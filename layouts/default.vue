<template>
  <v-app
    v-if="currentProject"
    class="evp-app"
    :class="{ authorized: currentUser, not_authorized: !currentUser }"
  >
    <client-only>
      <div class="account-menu-toggle">
        <v-btn @click.stop="accountMenuClick" icon>
          <v-icon size="38">{{ "$account_menu" }}</v-icon>
          <transition name="fade">
            <div
              v-if="newOpps.length"
              class="opp-count"
            >{{ newOpps.length }}</div>
          </transition>
        </v-btn>
      </div>
      <SideBar v-model="drawer" :no-root="true" />
    </client-only>
    <AppBar @changeKey="key = key + 1" />
    <v-main>
      <div
        class="mobile-scroll"
        ref="mobileScroll"
        v-scroll.self="mobileScroll"
      >
        <Nuxt :key="key" ref="main-content" />
        <Footer />
      </div>
    </v-main>
    <AuthModal />
    <Alert />
    <Notification />
    <div v-html="styles"></div>
  </v-app>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      drawer: false,
      timeouts: {},
      key: 0,
