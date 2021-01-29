<template>
  <div class="chat-footer">
    <v-btn v-if="!currentUser" outlined @click="$root.$emit(`authModal/open`)">
    </v-btn>

    <div v-else-if="chat.locked">
      Chat is temporarily locked
