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
            <div class="countdown-timer__item-value">
              {{ seconds }}
            </div>
            <div class="countdown-timer__item-label">secs</div>
          </div>
        </div>
        <div
          v-if="countdown.right_title"
          v-html="countdown.right_title"
          class="countdown__text text-right"
        ></div>
    </div>
  </div>
</template>

<script>
import moment from "moment-timezone";

export default {
  name: "Countdown",
  props: {
    value: String,
    page: Object,
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: null,
      visible: false
    };
  },
  created() {
    this.startCountdown();
  },
  computed: {
    styles() {
      const color = this.countdown.text_color;
      const data = { color };
      if (this.countdown.bg_color)
        data.backgroundColor = this.countdown.bg_color;
      if (this.countdown.preview.large.url)
        data.backgroundImage = `url(${this.countdown.preview.large.url})`;
      return data;
    },
    countdown() {
      return (this.page || this.currentPage).countdowns[this.value];
    }
  },
