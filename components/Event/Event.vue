<template>
  <div
    class="event"
    :class="{
      show_event: currentPage.events.length,
      with_events: currentPage.events.length > 1,
      with_chat: currentPage.chats.length,
