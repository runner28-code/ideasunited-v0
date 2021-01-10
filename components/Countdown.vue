<template>
  <div class="countdown" v-if="visible" :style="styles">
    <div>
      <div class="countdown-wrapper">
        <div v-html="countdown.left_title" class="countdown__text"></div>
