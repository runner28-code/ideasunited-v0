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
    ChatChannel: {
      connected() {
