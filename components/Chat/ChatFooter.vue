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

    <div v-else class="chat-footer__actions">
      <v-textarea
        @keydown.enter="sendMessage"
        auto-grow
        rows="1"
        class="chat-footer__actions-input"
        placeholder="Say something"
