<template>
  <div class="chat-header">
    <div
      class="chat-header__status"
      :class="`chat-header__status--${status}`"
    ></div>
    <div class="chat-header__title">{{ chat.title || "Chat" }}</div>
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
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 0 15px;
  min-height: 48px;

  &__title {
    font-weight: bold;
    font-size: 12px;
    line-height: 1.2;
  }

  &__status {
    width: 5px;
    min-width: 5px;
    height: 5px;
    display: inline-block;
    border-radius: 50%;
    margin-right: 5px;

    &--Connecting {
