<template>
  <div class="chat">
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
