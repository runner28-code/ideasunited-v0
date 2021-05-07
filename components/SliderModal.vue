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
          @keyup.enter="openNext"
          class="slider-modal__arrow slider-modal__next"
          tabindex="0"
          role="button"
        >
          <v-icon color="#fff" size="50">$chevron_right</v-icon>
        </v-btn>
        <v-card class="slider-modal__content">
          <div class="slider-modal__content-wrapper" @click.stop>
            <v-btn
              @click="close"
              class="close elevation-0"
              fab
              small
            >
              <v-icon size="36" :color="currentColor"
                >$close</v-icon
              >
            </v-btn>
            <slot></slot>
          </div>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "SliderModal",
  props: {
    name: String,
    value: Boolean,
    id: String,
    prevId: String,
    nextId: String,
