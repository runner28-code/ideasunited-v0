<template>
  <div v-if="data" class="notification">
    <v-dialog max-width="500" v-model="dialog">
      <v-card class="notification__dialog">
        <v-btn class="close" icon @click="closeDialog">
          <v-icon size="30">$close</v-icon>
        </v-btn>
        <Title>{{ data.title }}</Title>
        <p class="notification-content" v-html="data.description"></p>
        <Button
          target="_blank"
          v-if="data.link_text && data.link_to"
          :href="data.link_to"
          >{{ data.link_text }}</Button
        >
      </v-card>
    </v-dialog>
    <v-navigation-drawer
      right
      v-model="sidebar"
      fixed
      class="notification__sidebar"
      width="400"
