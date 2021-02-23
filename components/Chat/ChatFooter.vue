<template>
  <div class="chat-footer">
    <v-btn v-if="!currentUser" outlined @click="$root.$emit(`authModal/open`)">
      Log in
    </v-btn>

    <div v-else-if="chat.locked">
      Chat is temporarily locked
    </div>

      You are blocked
    </div>

    <div v-else class="chat-footer__actions">
      <v-textarea
        @keydown.enter="sendMessage"
