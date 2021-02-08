<template>
  <div>
    <v-dialog
      max-width="1440"
      content-class="slider-modal"
      :value="value"
      @input="$emit('input', $event)"
      v-if="value"
    >
        <v-btn
          v-if="prevId"
          @click="openPrev"
          @keyup.enter="openPrev"
          icon
          class="slider-modal__arrow slider-modal__prev"
          tabindex="0"
