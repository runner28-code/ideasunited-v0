<template>
  <iframe
    :src="`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoplay ? '1' : '0'}${vimeoH ? '&h=' + vimeoH : ''}`"
    frameborder="0"
    allow="autoplay; fullscreen"
    allowfullscreen
    ref="vimeo"
  ></iframe>
</template>

<script>
export default {
