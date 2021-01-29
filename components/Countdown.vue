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
          <div class="countdown-timer__item">
            <div class="countdown-timer__item-value">
              {{ hours }}
            </div>
            <div class="countdown-timer__item-label">hrs</div>
          </div>
          <div class="countdown-timer__item">
            <div class="countdown-timer__item-value">
              {{ minutes }}
            </div>
            <div class="countdown-timer__item-label">mins</div>
          </div>
          <div class="countdown-timer__item">
              {{ seconds }}
            </div>
            <div class="countdown-timer__item-label">secs</div>
