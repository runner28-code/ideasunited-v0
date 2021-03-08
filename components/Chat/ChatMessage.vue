<template>
  <div class="message">
    <div class="message-wrapper">
      <Avatar
        :name="message.user.full_name"
        :id="message.user.id"
        class="message__avatar"
      />
      <div>
        <div
          @click="$emit('replyTo', message.user.full_name)"
        >
          {{ message.user.full_name
