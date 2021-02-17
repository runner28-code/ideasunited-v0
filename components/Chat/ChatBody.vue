<template>
  <div class="chat-body" ref="messages">
    <client-only>
      <infinite-loading direction="top" @infinite="fetchMessages">
        <div slot="no-more"></div>
      </infinite-loading>
    </client-only>
    <ChatMessage
      :chat="chat"
      :message="message"
      v-for="message in messages"
