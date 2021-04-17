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
        class="chat-footer__actions-input"
        placeholder="Say something"
        v-model="message"
        maxlength="200"
      ></v-textarea>
      <div class="chat-footer__actions-bottom">
        <div>
          <v-menu left offset-x content-class="chat-footer__actions-emoji">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon>
                <v-icon>
                  $emoji
                </v-icon>
