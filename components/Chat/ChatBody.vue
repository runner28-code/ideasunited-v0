<template>
  <div class="chat-body" ref="messages">
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
      }
    }
  },
  methods: {
    newMessage(payload) {
      this.messages.push(payload);
      this.scrollBottom();
    },
    deleteMessage(messageId) {
      this.messages = this.messages.filter(m => m.id != messageId);
      this.scrollBottom();
    },
    updateMessage(payload) {
      this.messages = this.messages.map(m => {
        if (m.id == payload.id) {
          m.body = payload.body;
        }
        return m;
      });
      this.scrollBottom();
    },
    scrollBottom() {
      const el = this.$refs.messages;
      if (!el) return;
      if (el.scrollTop == el.scrollHeight - el.clientHeight)
        this.$nextTick(function() {
          el.scrollTop = el.scrollHeight;
        });
    },
