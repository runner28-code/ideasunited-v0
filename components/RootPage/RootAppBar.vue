<template>
  <div>
    <v-app-bar
      class="elevation-0 app-bar"
      :height="['sm', 'xs'].includes($size) ? 70 : 83"
      color="primary"
      app
      clipped-left
    >
      <v-toolbar-title class="toolbar-title">
        <router-link to="/" class="logo-link">
          <img :src="isProduction() ? whiteLogo : redLogo" width="258" alt="Logo" />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <transition name="fade">
        <div
          class="app-bar__new-opps"
          @click.stop="goToOpps()"
          v-if="newOpps.length && showNewOpps"
        >
          New opportunities just dropped!
          <v-btn
            icon
            class="app-bar__new-opps__close"
            @click.stop="showNewOpps = false"
            small
          >
            <v-icon size="20" color="white">$close</v-icon>
          </v-btn>
        </div>
      </transition>

      <v-btn icon @click="$emit('toggleSidebar')" class="app-bar__menu">
        <v-icon size="34" color="white">$account_menu</v-icon>
        <transition name="fade">
          <div
            v-if="newOpps.length"
            class="app-bar__menu__opp-count"
          >{{ newOpps.length }}</div>
        </transition>
      </v-btn>

    </v-app-bar>
    <transition name="fade">
      <a class="app-bar__new-opps-details"
        v-if="newOppDetail && showNewOppDetails"
        :key="newOppDetail.id"
        :href="newOppDetail.site"
        target="_blank"
      >
        <div class="app-bar__new-opps-details__content">
          <div class="app-bar__new-opps-details__content-top">
            <div class="app-bar__new-opps-details__thumb"
              :style="{backgroundImage: `url(${newOppDetailPreview(newOppDetail) })`}"
            ></div>
            <div class="app-bar__new-opps-details__label">
              <div class="app-bar__new-opps-details__new">New opportunity</div>
              <div class="app-bar__new-opps-details__title">{{ newOppDetail.title }}</div>
            </div>
          </div>
          <div class="app-bar__new-opps-details__description">{{ newOppDetail.og_description }}</div>
        </div>
        <div class="app-bar__new-opps-details__actions">
          <v-btn
            icon
            class="app-bar__new-opps-details__close"
            @click.prevent="showNewOppDetails = false"
            small
          >
            <v-icon size="20" color="white">$close</v-icon>
          </v-btn>
          <v-btn
            icon
            class="app-bar__new-opps-details__eye"
            small
          >
            <v-icon size="20" color="white">$eye</v-icon>
          </v-btn>
        </div>
      </a>
    </transition>
  </div>
</template>

<script>
import { frontendToProfile } from "@/utils";

export default {
  name: "AppBar",
  props: {
    drawer: Boolean,
  },
  data() {
    return {
      whiteLogo: require("@/assets/images/logo.png"),
      redLogo: require("@/assets/images/logo-red.png"),
      newOpps: [],
      showNewOpps: true,
      showNewOppDetails: true,
      newOppDetail: null,
      newOppDetailIndex: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.getOpportunityNotifications();
    }, 1000);
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
    },
    isProduction() {
      return (
        this.currentProject &&
        this.currentProject.production_domain == window.location.hostname
      );
    },
    async getOpportunityNotifications() {
      const { data } = await this.$api.SubmissionForm.get();
      this.newOpps = data;
      setTimeout(() => {
        this.updateNewOppDetail();
      }, 5000);
    },
    goToOpps() {
      window.location.href = frontendToProfile()[window.location.origin] + "/opportunities";
    },
    updateNewOppDetail() {
      if(!this.newOpps || this.newOpps.length == 0) {
        this.newOppDetail = null;
        return;
      }
      if(!this.newOppDetail) {
        this.newOppDetailIndex = 0;
        this.newOppDetail = this.newOpps[this.newOppDetailIndex];
      } else {
        this.newOppDetailIndex = (this.newOppDetailIndex + 1) % this.newOpps.length;
        this.newOppDetail = this.newOpps[this.newOppDetailIndex];
      }
      this.nextNewOppDetail();
    },
    nextNewOppDetail() {
      setTimeout(() => {
        this.updateNewOppDetail();
      }, 15000);
    },
    newOppDetailPreview(opp) {
      if(!opp.preview) return;
      if(opp.preview.thumb && opp.preview.thumb.url) return opp.preview.thumb.url;
      return opp.preview.url;
    },
    goToOpp(opp) {
      
    },
  }
};
</script>

<style scoped lang="scss">
.toolbar-title {
  padding: 0 25px;
  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
}

.app-bar {
  background-color: #E12D1B !important;
  &::v-deep {
    .v-toolbar__content {
      padding: 0 30px 0 0 !important;
    }
  }
  &__menu {
    margin-right: -7px;
    position: relative;
    &__opp-count {
      position: absolute;
      top: -11px;
      right: -2px;
      color: white;
      background: #E12D1B;
      font-size: 12px;
      padding-top: 0.2em;
      min-width: 21px;
      height: 21px;
      border-radius: 50%;
    }
  }
  &__new-opps {
    color: white;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    font-size: 14px;
    padding: 7px 5px 4px 14px;
    margin-right: 23px;
    cursor: pointer;
    background: #262729;
    filter: drop-shadow(5px 5px #000000);
    @media screen and (max-width: 944px) {
      display: none;
    }
    &__close {
      margin-top: -3px;
    }
  }
  &__new-opps-details {
    position: fixed;
    bottom: 1em;
    right: 1em;
    width: 240px;
    background-color: #262729;
    color: white;
    font-size: 14px;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    z-index: 2;
    display: flex;
    filter: drop-shadow(5px 5px #000000);
    text-decoration: none;
    @media screen and (max-width: 944px) {
      width: unset;
      right: 0;
      left: 0;
      bottom: 0;
      border-radius: 0;
      border-width: 2px 0 0 0;
    }
    &__content {
      padding: 10px;
      flex-grow: 1;
    }
    &__content-top{
      display: flex;
      align-items: center;
    }
    &__thumb {
      width: 50px;
