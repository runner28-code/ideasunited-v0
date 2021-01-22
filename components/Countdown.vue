<template>
  <div class="countdown" v-if="visible" :style="styles">
    <div>
      <div class="countdown-wrapper">
        <div v-html="countdown.left_title" class="countdown__text"></div>
        <div class="countdown-timer">
          <div class="countdown-timer__item" v-if="days">
            <div class="countdown-timer__item-value">{{ days }}</div>
            <div class="countdown-timer__item-label">days</div>
          </div>
