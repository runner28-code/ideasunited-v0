<template>
  <iframe
    :src="`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoplay ? '1' : '0'}${vimeoH ? '&h=' + vimeoH : ''}`"
    allow="autoplay; fullscreen"
    allowfullscreen
    class="vimeo-player"
    ref="vimeo"
  ></iframe>
</template>
