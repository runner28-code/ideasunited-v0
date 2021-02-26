<template>
  <div class="chat">
    <ChatHeader :chat="chat" :status="status" />
    <ChatBody :chat="chat" />
    <ChatFooter :chat="chat" />
</template>

<script>
export default {
  props: {
    chat: Object
  },
  data() {
