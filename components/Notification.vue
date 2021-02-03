<template>
  <div v-if="data" class="notification">
    <v-dialog max-width="500" v-model="dialog">
      <v-card class="notification__dialog">
        <v-btn class="close" icon @click="closeDialog">
          <v-icon size="30">$close</v-icon>
        </v-btn>
        <Title>{{ data.title }}</Title>
