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
      newOpps: []
    };
  },
  created() {
    this.$store.dispatch("application/init");

    if (process.client) {
      this.$cable.subscribe({
        channel: "ProjectChannel",
        project_id: this.currentProject.id,
        env: this.currentProject.env,
      });

      this.$cable.subscribe({
        channel: "NotificationChannel",
        project_id: this.currentProject.id,
        env: this.currentProject.env,
      });
    }

    if (process.client) {
      const googleFonts = [
        this.activeTheme.h1_font?.font,
        this.activeTheme.h2_font?.font,
        this.activeTheme.paragraph_font?.font,
        this.activeTheme.header_font?.font,
        this.activeTheme.footer_font?.font,
      ].filter((f) => f && f.src_type == "google_fonts");

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
        this.activeTheme.footer_font?.font,
      ].filter((f) => f && f.src_type == "typekit");

      if (googleFonts.length) {
        this.$WebFont.load({
          google: {
            families: _.uniq(
              googleFonts.map((font) => font.font_name + ":300,400,500,700,900")
            ),
          },
        });
      }

      const fontkitIds = _.uniq(typekitFonts.map((font) => font.typekit_id));

      fontkitIds.forEach((fontkitId) => {
        this.$WebFont.load({
          typekit: {
            id: fontkitId,
          },
        });
      });
    }
  },
  mounted() {
    this.$root.$on("toggleDrawer", () => {
      this.drawer = !this.drawer;
    });
    this.$root.$on("mobileScrollTo", (y) => {
      this.$refs.mobileScroll.scroll({
        top: y,
        left: 0,
        behavior: "smooth",
      });
    });
    setTimeout(() => {
      this.getOpportunityNotifications();
    }, 1000);
  },
  beforeDestroy() {
    this.$cable.unsubscribe({
      channel: "ProjectChannel",
      project_id: this.currentProject.id,
      env: this.currentProject.env,
    });

