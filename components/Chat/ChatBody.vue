<template>
  <div class="chat-body" ref="messages">
      <infinite-loading direction="top" @infinite="fetchMessages">
