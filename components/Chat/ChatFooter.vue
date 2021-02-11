<template>
  <div class="chat-footer">
    <v-btn v-if="!currentUser" outlined @click="$root.$emit(`authModal/open`)">
      Log in
    </v-btn>

    <div v-else-if="chat.locked">
      Chat is temporarily locked
    </div>

    <div v-else-if="currentUser.blocked && currentUser.blocked">
      You are blocked
    </div>
