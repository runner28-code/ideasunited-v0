<template>
  <div class="countdown" v-if="visible" :style="styles">
    <div>
      <div class="countdown-wrapper">
        <div class="countdown-timer">
          <div class="countdown-timer__item" v-if="days">
