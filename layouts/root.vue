<template>
  <v-app
    v-if="currentProject"
    class="root"
    :class="{ authorized: currentUser, not_authorized: !currentUser }"
  >
    <client-only>
      <RootAppBar
        @toggleSidebar="drawer = !drawer"
      />
      <SideBar v-model="drawer" />
    </client-only>
    <v-main>
      <HomePageLede />
      <Nuxt :key="key" ref="main-content" />
      <Footer :is-static="true"/>
    </v-main>
    <AuthModal />
    <Alert />
    <Notification />
    <div v-html="styles"></div>
  </v-app>
</template>

<script>
import _ from "lodash";
import HomePageLede from "@/components/RootPage/HomePageLede";
import RootAppBar from "@/components/RootPage/RootAppBar";
export default {
  components: { HomePageLede, RootAppBar },
  data() {
    return {
      drawer: false,
      timeouts: {},
      key: 0
    };
  },
  created() {
    this.$store.dispatch("application/init");

    if (process.client) {
      this.$cable.subscribe({
        channel: "ProjectChannel",
