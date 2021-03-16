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
