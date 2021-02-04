<template>
  <div class="chat-body" ref="messages">
      <infinite-loading direction="top" @infinite="fetchMessages">
        <div slot="no-more"></div>
        <div slot="no-results"></div>
      </infinite-loading>
    </client-only>
    <ChatMessage
      :chat="chat"
