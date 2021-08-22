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
          case "update_chat_params":
            this.$store.commit("page/updateChat", payload);
            break;
        }
      }
    }
  },
  beforeDestroy() {
    this.$cable.unsubscribe({
      channel: "ChatChannel",
      id: this.chat.id,
      env: this.currentProject.env
    });
  }
};
</script>

<style scoped lang="scss">
.chat {
  color: black;
