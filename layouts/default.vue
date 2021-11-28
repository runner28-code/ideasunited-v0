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

    this.$cable.unsubscribe({
      channel: "NotificationChannel",
      project_id: this.currentProject.id,
      env: this.currentProject.env,
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
      },
    },
    NotificationChannel: {
      received({ payload, type }) {
        switch (type) {
          case "send_notification":
            this.sendNotification(payload);
            break;
        }
      },
    },
  },
  computed: {
    styles() {
      return `
        <style rel="stylesheet" type="text/css">
          .v-application {
            font-family: ${this.activeTheme.paragraph_font.font.font_name}, sans-serif;
            font-size: ${this.activeTheme.paragraph_font.size}px;
            letter-spacing: ${this.activeTheme.paragraph_font.letter_spacing}px;
            font-style: ${this.activeTheme.paragraph_font.style};
            font-weight: ${this.activeTheme.paragraph_font.weight};
            text-transform: ${this.activeTheme.paragraph_font.case};
          }
          h1 {
            font-family: ${this.activeTheme.h1_font.font.font_name}, sans-serif;
            font-size: ${this.activeTheme.h1_font.size}px;
            letter-spacing: ${this.activeTheme.h1_font.letter_spacing}px;
            font-style: ${this.activeTheme.h1_font.style};
            font-weight: ${this.activeTheme.h1_font.weight};
            text-transform: ${this.activeTheme.h1_font.case};
          }
          h2 {
            font-family: ${this.activeTheme.h2_font.font.font_name}, sans-serif;
            font-size: ${this.activeTheme.h2_font.size}px;
            letter-spacing: ${this.activeTheme.h2_font.letter_spacing}px;
            font-style: ${this.activeTheme.h2_font.style};
            font-weight: ${this.activeTheme.h2_font.weight};
            text-transform: ${this.activeTheme.h2_font.case};
          }
          ${this.activeTheme?.css}
          ${this.staticCss}
        </style>
      `;
    },
    staticCss() {
      const pages = this.currentProject.menu_pages.filter(
        (t) => t.menu_style != "home_logo" && !t.parent_menu_id
      );
      if (pages.length > 0) return "";

      return `
        @media screen and (min-width: 944px) {
          .app-bar {
            display: none;
          }
        }
        .page-wrapper {
          margin-left: 0 !important;
        }

        .opportunity-page {
          width: 100% !important;
          left: 0 !important;
        }

        .background-lede__logo {
          visibility: visible !important;
        }
      `;
    },
  },
  methods: {
    sendNotification(payload) {
      if (
        !payload.page_ids.length ||
        payload.page_ids.includes(this.currentPage.id)
      ) {
        switch (payload.notification_type) {
          case "banner":
            this.$alert({ message: payload.title, timeout: 200000 });
            break;
          default:
            this.$root.$emit("showNotification", payload);
            break;
        }
      }
    },
    availableEvent(event) {
      return (
        !event.role_ids.length ||
        _.intersection(event.role_ids, this.currentUser?.role_ids).length
      );
    },
    mobileScroll(e) {
      const y = e.target.scrollTop;
      this.$root.$emit("mobileScroll", y);
    },
    accountMenuClick() {
      this.drawer = !this.drawer;
      this.$nextTick(() => {
        this.$root.$emit("fullpageRebuild");
      });
    },
    async getOpportunityNotifications() {
      const { data } = await this.$api.SubmissionForm.get();
      this.newOpps = data;
    },
  },
  watch: {
    drawer: {
      handler() {
        this.$root.$emit("drawerUpdate", this.drawer);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.evp-app {
  overflow: unset;
}
.account-menu-toggle {
  position: absolute;
  top: 26px;
  right: 26px;
  z-index: 1;
  @media screen and (max-width: 944px) {
    display: none;
  }
}
.mobile-scroll {
  overflow-y: scroll;
  overflow-anchor: none;
  height: 100%;
}
.opp-count {
  position: absolute;
