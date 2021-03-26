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
          class="message__name"
          @click="$emit('replyTo', message.user.full_name)"
        >
          {{ message.user.full_name
          }}<span
            v-if="chat.moderator_ids.includes(message.user.id)"
            :style="{ color: activeTheme.primary_color }"
            >*</span
          >
        </div>
        <div class="message__timestamp">
          <timeago :auto-update="60" :datetime="message.created_at"></timeago>
        </div>
      </div>
    </div>
    <v-menu
