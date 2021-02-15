<template>
  <div v-if="data" class="notification">
    <v-dialog max-width="500" v-model="dialog">
      <v-card class="notification__dialog">
        <v-btn class="close" icon @click="closeDialog">
        </v-btn>
        <Title>{{ data.title }}</Title>
        <p class="notification-content" v-html="data.description"></p>
