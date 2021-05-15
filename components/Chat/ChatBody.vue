<template>
  <div class="chat-body" ref="messages">
    <client-only>
      <infinite-loading direction="top" @infinite="fetchMessages">
        <div slot="no-more"></div>
        <div slot="no-results"></div>
      </infinite-loading>
    </client-only>
    <ChatMessage
      :chat="chat"
      :message="message"
      v-for="message in messages"
      :key="message.uuid"
    />
  </div>
</template>

<script>
export default {
  props: {
    chat: Object
  },
  data() {
    return { messages: [] };
  },
  channels: {
    ChatChannel: {
      received({ type, payload }) {
        switch (type) {
          case "new_message":
            this.newMessage(payload);
            break;
          case "delete_message":
            this.deleteMessage(payload.id);
            break;
          case "update_message":
            this.updateMessage(payload);
            break;
        }
