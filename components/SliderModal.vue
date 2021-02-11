<template>
  <div>
    <v-dialog
      max-width="1440"
      content-class="slider-modal"
      :value="value"
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
