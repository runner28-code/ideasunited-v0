<template>
  <div class="chat-header">
    <div
      class="chat-header__status"
      :class="`chat-header__status--${status}`"
    ></div>
    <div class="chat-header__title">{{ chat.title || "Chat" }}</div>
  </div>
</template>

<script>
export default {
  props: {
    chat: Object
  },
  data() {
    return { status: "Connecting" };
  },
  channels: {
    ChatChannel: {
      connected() {
        this.status = "Connected";
      },
      disconnected() {
        this.status = "Disconnected";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.chat-header {
  box-shadow: 0px 0px 5px -1px rgb(0 0 0 / 15%);
  position: relative;
