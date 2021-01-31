<template>
  <div class="chat-body" ref="messages">
    <client-only>
      <infinite-loading direction="top" @infinite="fetchMessages">
        <div slot="no-more"></div>
        <div slot="no-results"></div>
