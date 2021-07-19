<template>
  <div class="message">
    <div class="message-wrapper">
      <Avatar
        :name="message.user.full_name"
        :id="message.user.id"
        class="message__avatar"
      />
      <div>
        <div
          class="message__name"
          @click="$emit('replyTo', message.user.full_name)"
        >
          {{ message.user.full_name
          }}<span
            v-if="chat.moderator_ids.includes(message.user.id)"
            :style="{ color: activeTheme.primary_color }"
            >*</span
          >
        </div>
        <div class="message__body">{{ body }}</div>
        <div class="message__timestamp">
          <timeago :auto-update="60" :datetime="message.created_at"></timeago>
        </div>
      </div>
    </div>
    <v-menu
      offset-y
      v-if="currentUser && currentUser.moderator_chat_ids.includes(chat.id)"
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon class="message-actions">
          <v-icon size="18">$dots_vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="deleteMessage">
          <v-list-item-title>Delete message</v-list-item-title>
        </v-list-item>
        <v-list-item @click="deleteAllMessagesAndBlock">
          <v-list-item-title>Delete all messages from user</v-list-item-title>
        </v-list-item>
        <v-list-item @click="blockUser">
          <v-list-item-title class="red--text">Block user</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import stripMessage from "@/filters/stripMessage";
import badwords from "@/filters/badwords";

export default {
  name: "ChatMessage",
  props: {
    message: Object,
    chat: Object
  },
  methods: {
    deleteMessage() {
      this.$api.Message.destroy(this.message.id);
    },
    blockUser() {
      if (confirm("Are you sure?")) {
        this.$api.Message.blockUser({ message_id: this.message.id });
