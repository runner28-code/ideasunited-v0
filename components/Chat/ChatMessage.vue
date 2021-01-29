<template>
  <div class="message">
      <Avatar
        :name="message.user.full_name"
        :id="message.user.id"
        class="message__avatar"
      />
      <div>
