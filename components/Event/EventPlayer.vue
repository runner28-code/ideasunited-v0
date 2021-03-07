<template>
  <div class="event-player" :style="styles">
    <YoutubePlayer
      :youtubeId="event.youtube_id"
      :key="event.id"
    />
    <VimeoPlayer
