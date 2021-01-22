<template>
  <div
    class="event"
    :class="{
      show_event: currentPage.events.length,
      with_events: currentPage.events.length > 1,
      with_chat: currentPage.chats.length,
      chat_is_text: currentPage.chats.length
        ? currentPage.chats[0].chat_type == 'text'
        : false,
      chat_is_zoom: currentPage.chats.length
        ? currentPage.chats[0].chat_type == 'zoom'
        : false
    }"
  >
    <div
      :class="{ with_chat: currentPage.chats[0] }"
      class="event__video"
