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
        project_id: this.currentProject.id,
        env: this.currentProject.env
      });

      this.$cable.subscribe({
        channel: "NotificationChannel",
        project_id: this.currentProject.id,
        env: this.currentProject.env
      });
    }

    if (process.client) {
      const googleFonts = [
        this.activeTheme.h1_font?.font,
        this.activeTheme.h2_font?.font,
        this.activeTheme.paragraph_font?.font,
        this.activeTheme.header_font?.font,
        this.activeTheme.footer_font?.font
      ].filter(f => f && f.src_type == "google_fonts");

      googleFonts.push({
        font_name: "Source Sans Pro",
        google_font_name: "Source Sans Pro",
        src_type: "google_fonts",
      });

      const typekitFonts = [
        this.activeTheme.h1_font?.font,
        this.activeTheme.h2_font?.font,
        this.activeTheme.paragraph_font?.font,
        this.activeTheme.header_font?.font,
        this.activeTheme.footer_font?.font
      ].filter(f => f && f.src_type == "typekit");

      if (googleFonts.length) {
        this.$WebFont.load({
          google: {
            families: _.uniq(
              googleFonts.map(font => font.font_name + ":300,400,500,700,900")
            )
          }
        });
      }

      const fontkitIds = _.uniq(typekitFonts.map(font => font.typekit_id));

      fontkitIds.forEach(fontkitId => {
        this.$WebFont.load({
          typekit: {
            id: fontkitId
          }
        });
      });
    }
  },
  mounted() {
    this.$root.$on("toggleDrawer", () => {
      this.drawer = !this.drawer;
    });
    this.$root.$on("mobileScrollTo", y => {
      this.$refs.mobileScroll.scroll({
        top: y,
        left: 0,
        behavior: "smooth"
      });
    });
  },
  beforeDestroy() {
    this.$cable.unsubscribe({
      channel: "ProjectChannel",
      project_id: this.currentProject.id,
      env: this.currentProject.env
    });

    this.$cable.unsubscribe({
      channel: "NotificationChannel",
      project_id: this.currentProject.id,
      env: this.currentProject.env
    });
  },
  channels: {
    ProjectChannel: {
      received({ payload, type }) {
        switch (type) {
          case "update_project_params":
            this.$store.commit("project/set", payload);
            break;
        }
      }
    },
    NotificationChannel: {
      received({ payload, type }) {
        switch (type) {
          case "send_notification":
            this.sendNotification(payload);
            break;
