<template>
  <v-navigation-drawer
    close-on-click
    right
    :value="value"
    @input="$emit('input', $event)"
    class="rightsidebar"
    hide-overlay
    absolute
    :width="drawerWidth"
    touchless
  >
    <v-btn icon class="rightsidebar__close" @click="$emit('input', false)">
      <v-icon size="36">$close</v-icon>
    </v-btn>
    <v-list dense>
      <v-list-item
        v-for="(menuItem, idx) in menuPages"
        :key="menuItem.id"
        class="rightsidebar__item rightsidebar__item-mobile"
        :to="`#${menuItem.url}`"
        v-ripple="false"
      >
        <span @click="menuClick(menuItem, idx)">
          {{ menuItem.menu_title }}
        </span>
      </v-list-item>
      <v-list-item
        v-for="(menuItem, idx) in menuFooterPages"
        :key="menuItem.id"
        class="rightsidebar__item-small rightsidebar__item-mobile"
        :to="`#${menuItem.url}`"
        v-ripple="false"
      >
        <span @click="menuClick(menuItem, idx)">
          {{ menuItem.footer_menu_title }}
        </span>
      </v-list-item>
      <div class="rightsidebar__separator" v-if="showSeparator"></div>
      <v-list-item
        class="rightsidebar__item"
        :href="opportunitiesUrl"
        v-ripple="false"
      >
        Opportunities
        <transition name="fade">
          <div
            v-if="newOpps.length"
            class="rightsidebar__opp-count"
          >{{ newOpps.length }}</div>
        </transition>
      </v-list-item>
      <v-list dense v-if="noRoot">
        <v-list-item class="rightsidebar__item__subitem">
          {{ currentProject.title }}
        </v-list-item>
      </v-list>
      <v-list-item
        class="rightsidebar__item"
        :href="creatorsUrl"
        v-ripple="false"
        v-if="currentUser && currentUser.confirmed"
      >
        Creator Search
      </v-list-item>
      <v-list-item
        class="rightsidebar__item"
        :href="profileUrl"
        v-if="currentUser && currentUser.confirmed"
        v-ripple="false"
      >
        User Portal
      </v-list-item>
      <v-list-item
        v-if="!currentUser"
        class="rightsidebar__item"
        @click.prevent="clickLogin()"
        v-ripple="false"
      >
        Login/Register
      </v-list-item>
      <v-list-item
        v-if="currentUser"
        class="rightsidebar__item"
        @click.prevent="logout()"
        v-ripple="false"
      >
        Logout
      </v-list-item>
    </v-list>
    <div class="rightsidebar__bottom">
      <div @click="logoClick()" class="rightsidebar__logo" role="img text" alt="iU Community ™" aria-label="iU Community ™"></div>

      <div class="rightsidebar__copyright">© {{ year }} Ideas United</div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import isMobileMixin from "./isMobile.mixin";
export default {
  extends: isMobileMixin,
  props: {
    value: Boolean,
    noRoot: Boolean
  },
  data(){
    return {
      year: new Date().getFullYear(),
      newOpps: [],
    }
  },
  mounted(){
    this.$root.$on('updateAccountSideBar', (isOpen) => {
      this.accountSideBar = isOpen;
    });
    setTimeout(() => {
      this.getOpportunityNotifications();
    }, 1000);
  },
  methods: {
    bindProps(menuItem) {
      if (menuItem.url_type == "absolute") {
        return {
          href: menuItem.absolute_url,
          target: "_blank"
        };
      }
      return {
        to: menuItem.url
      };
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$emit('input', false);
      window.location.href = "/";
    },
    clickLogin(){
      this.$root.$emit(`authModal/open`);
    },
    async menuClick(item, idx) {
      this.$root.$emit("menuClick", item, idx);
      if (
        (!item && this.$route.path == "/") ||
        (item && item.url == this.$route.path)
      ) {
        this.$emit("changeKey");
      } else {
        this.$emit('input', false);
      }
    },
    logoClick() {
      window.location.href = "/";
      this.$emit('input', false);
    },
    async getOpportunityNotifications() {
      const { data } = await this.$api.SubmissionForm.get();
      this.newOpps = data;
    },
  },
  computed: {
    logo() {
      if (!this.activeTheme) return false;

      return (
        this.activeTheme.header_logo_mobile.large.url ||
        this.activeTheme.header_logo_mobile.url
      );
    },
    profileUrl() {
      return process.env.NODE_ENV === "development" ?
        "http://localhost:8081" :
        "https://profile." + window.location.hostname;
    },
    opportunitiesUrl() {
      return this.profileUrl + "/opportunities"
    },
    creatorsUrl() {
      return this.profileUrl + "/creators"
    },
    menuPages() {
      const menuPages = this.currentProject.menu_pages;
      return menuPages.filter(t => !t.parent_menu_id);
    },
    menuFooterPages() {
      return this.currentProject.menu_footer_pages;
    },
    drawerWidth() {
      return this.isMobile ? '100%' : '302px';
    },
    showSeparator() {
      return this.isMobile && this.menuPages.length;
    }
  }
};
</script>

<style scoped lang="scss">
.rightsidebar {
  max-width: 100%;
  height: 101vh !important;
  z-index: 8;

  @media screen and (max-width: 944px) {
    background: #E12D1B;
    color: white;
  }

  &__logo {
    display: block;
    height: 50px;
    max-width: 269px;
    background-size: contain;
    background-position: center;
    background-image: url(~assets/images/sidebar_logo.svg);
    cursor: pointer;
    @media screen and (max-width: 944px) {
      background-image: url(~assets/images/sidebar_logo_mobile.svg);
    }
    img {
      width: 100%;
    }
    @media screen and (max-width: 944px) {
      margin: 8px auto 0;
    }
  }

  &__close {
    position: absolute;
