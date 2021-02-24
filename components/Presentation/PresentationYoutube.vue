<template>
  <div class="youtube-player">
    <div id="youtube-player"></div>
    <div class="youtube-player__after" @click="started ? null : play"></div>
  </div>
</template>

<script>
export default {
  props: {
    slide: Object,
    presentation: Object
