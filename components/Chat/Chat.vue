<template>
  <div class="chat">
    <ChatHeader :chat="chat" :status="status" />
    <ChatBody :chat="chat" />
    <ChatFooter :chat="chat" />
  </div>
</template>

<script>
export default {
  props: {
    chat: Object
  },
  data() {
    return {
      message: "",
      status: "Connected",
      messages: []
    };
  },
  created() {
    if (process.client) {
      console.info('Chat created this', this);
      this.$cable.subscribe({
        channel: "ChatChannel",
        chat_id: this.chat.id,
        env: this.currentProject.env
      });
    }
  },
  channels: {
    ChatChannel: {
      received({ type, payload }) {
        switch (type) {
            this.$store.commit("page/updateChat", payload);
            break;
        }
