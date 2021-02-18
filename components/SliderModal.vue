<template>
  <div>
    <v-dialog
      max-width="1440"
      content-class="slider-modal"
      :value="value"
      @input="$emit('input', $event)"
      v-if="value"
    >
      <div class="slider-modal__wrapper" @click="close">
        <v-btn
          v-if="prevId"
          @click="openPrev"
          @keyup.enter="openPrev"
          icon
          class="slider-modal__arrow slider-modal__prev"
          tabindex="0"
          role="button"
        >
          <v-icon color="#ffffff" size="50">$chevron_left</v-icon>
        </v-btn>
        <v-btn
          v-if="nextId"
          @click="openNext"
