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
