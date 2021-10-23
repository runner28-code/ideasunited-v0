<template>
  <v-app-bar :style="headerStyles" class="app-bar" app fixed>
    <v-toolbar-title class="app-bar__start">
      <div @click="menuClick(menuPages[0], 0)">
        <nuxt-link :to="`#${homeHash}`" class="app-bar__logo">
          <img
            v-if="logo && !currentProject.hide_frontend_logo"
            :src="logo"
            alt="Logo"
          />
        </nuxt-link>
      </div>
    </v-toolbar-title>
    <a
      href="/more"
      @click.prevent="dropdownClick"
      v-if="gridMenuPages.length"
      class="app-bar__dropdown"
      :style="{ color: activeTheme.primary_color }"
    >
      <div class="app-bar__dropdown-title">
        {{ activeGridMenuTitle || activeTheme.header_dropdown_placeholder }}
      </div>
      <div class="app-bar__dropdown-icon">
        <v-icon>$menu_down</v-icon>
      </div>
    </a>
    <div class="app-bar__nav">
      <div
        :key="menuItem.id"
        v-for="(menuItem, idx) in menuPages"
        class="app-bar__nav-item"
        :class="[
          `app-bar__nav-item--${menuItem.menu_style}`,
          `app-bar__nav-item-${menuItem.id}`,
        ]"
        :style="
          menuItem.menu_style == 'button'
            ? {
                backgroundColor: menuItem.menu_button_background,
                color: menuItem.menu_button_text_color,
              }
            : {}
        "
      >
        <v-menu
          offset-y
          v-if="['relative', 'none'].includes(menuItem.url_type)"
        >
          <template v-slot:activator="{ on, attrs }">
            <component
              v-bind="attrs"
              v-on="on"
              :is="menuItem.url_type == 'relative' ? 'nuxt-link' : 'span'"
              :to="`#${menuItem.url}`"
              :class="{
                'menu-item-hidden': menuItem.menu_style == 'home_logo',
              }"
            >
              <span @click="menuClick(menuItem, idx)">{{
                menuItem.menu_title
              }}</span>
              <span class="menu-caret" v-if="menuItem.menus.length">▾</span>
            </component>
          </template>

          <v-list>
            <v-list-item
              @click="menuClick(menuItem, idx)"
              :to="menu.url"
              v-for="(menu, idx) in menuItem.menus"
              :key="idx"
              >{{ menu.menu_title }}</v-list-item
            >
          </v-list>
        </v-menu>
        <a
          v-else-if="menuItem.url_type == 'absolute'"
          target="_blank"
          :href="menuItem.absolute_url"
          >{{ menuItem.menu_title }}</a
        >
        <a
          @click.prevent="menuItem.onclick"
          v-else-if="menuItem.url_type == 'click'"
        >
          {{ menuItem.menu_title }}
        </a>
      </div>
      <div class="app-bar__nav-footer">
        <div
          :key="menuItem.id"
          v-for="menuItem in menuFooterPages"
          class="app-bar__nav-footer-item"
        >
          <a
            v-if="menuItem.url_type == 'absolute'"
            target="_blank"
            :href="menuItem.absolute_url"
            >{{ menuItem.footer_menu_title }}</a
          >
          <a
            @click.prevent="menuItem.onclick"
            v-else-if="menuItem.url_type == 'click'"
          >
            {{ menuItem.footer_menu_title }}
          </a>
        </div>
      </div>
    </div>
    <div class="menu-toggle" v-if="menuPages.length">
      <v-btn @click="toggleDrawer()" icon>
        <v-icon color="#E12D1B" size="32">{{
          drawer ? "$close" : "$account_menu"
        }}</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      mounted: false,
      drawer: false,
    };
  },
  mounted() {
    this.mounted = true;
    this.$root.$on("drawerUpdate", (isOpen) => {
      this.drawer = isOpen;
    });
  },
  methods: {
    async menuClick(item, idx) {
      this.$root.$emit("menuClick", item, idx);
      if (
        (!item && this.$route.path == "/") ||
        (item && item.url == this.$route.path)
      ) {
        this.$emit("changeKey");
      }
    },
    dropdownClick() {
      this.$route.path == "/more"
        ? this.$router.back()
        : this.$router.push("/more");
    },
    toggleDrawer() {
      this.$root.$emit("toggleDrawer");
    },
  },
  computed: {
    activeGridMenuTitle() {
      const page = this.gridMenuPages.find((t) => t.id == this.currentPage?.id);
      return page?.menu_title;
    },
    gridMenuPages() {
      return this.currentProject.grid_menu_pages;
    },
    homeHash() {
      if (!this.currentProject || this.currentProject.menu_pages == 0)
        return "";
      return this.currentProject.menu_pages[0].url;
    },
    menuPages() {
      let menuPages;
      if (this.currentUser) {
        const lastIndex = _.findLastIndex(
          this.currentProject.menu_pages,
          (menuItem) => menuItem.menu_style != "button"
        );
        menuPages = [...this.currentProject.menu_pages];
      } else {
        menuPages = this.currentProject.menu_pages;
      }
      return menuPages.filter((t) => !t.parent_menu_id);
    },
    menuFooterPages() {
      return this.currentProject.menu_footer_pages;
    },
    headerStyles() {
      const { header_font, header_color, header_background } = this.activeTheme;
      return {
        backgroundColor: header_background,
        color: header_color,
        fontSize: header_font.size + "px",
        textTransform: header_font.case,
        fontWeight: header_font.weight,
        letterSpacing: header_font.letter_spacing + "px",
        fontFamily:
          (header_font.font ? header_font.font.font_name : "Roboto") +
          ", sans-serif",
      };
    },
    logo() {
      if (!this.mounted) return "";
      return this.opportunityLogo;
    },
  },
};
</script>

<style scoped lang="scss">
.app-bar {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15) !important;
  transition: 0.3s;
  min-height: calc(100vh - 72px) !important;
  overflow: auto;
  width: 232px;
  position: absolute;

  &.v-sheet.v-toolbar {
    box-shadow: none !important;
  }
  &::v-deep {
    .v-toolbar__content {
      transition: 0.3s;
      height: auto !important;
      flex-direction: column;
      padding: 58px 56px;
      @media screen and (max-width: 944px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 18px 20px;
      }
    }
  }

  @media screen and (max-width: 944px) {
    min-height: unset !important;
    height: auto !important;
    width: 100%;

    &::v-deep {
      .v-toolbar__content {
        min-height: 100% !important;
      }
    }
  }

  &__dropdown {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    text-transform: none;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      opacity: 0.8;
    }

    &-title {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.1;
    }
    &-icon {
      margin-left: 5px;
      &::v-deep {
        .v-icon {
          color: inherit;
        }
      }
    }
  }

  &__logo {
    color: inherit;
    text-decoration: none;
    display: block;

    img {
      display: block;
      width: 120px;
      transition: 0.3s;
      @media screen and (max-width: 944px) {
        max-height: 50px;
        width: auto;
        max-width: 100%;
      }
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    width: 100%;

    & > &-item:last-child.app-bar__nav-item--button {
      margin-right: 0;
    }

    &-item {
      font-size: 24px;
      margin-top: 40px;

      &--button {
        height: 100%;
        text-align: center;
        transition: 0.3s;

        &:hover {
          filter: brightness(105%);
        }

        a {
          padding: 0 30px;
          display: block;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          color: inherit !important;
        }
      }

