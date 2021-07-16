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
          icon
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
    scrollToElement: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      triggerName: `open-${this.name}`
    };
  },
  mounted() {
    this.$root.$on(this.triggerName, id => {
      if (this.id == id) {
        this.$emit("input", true);

        if (this.scrollToElement) {
          const y = this.$el.getBoundingClientRect().top + window.scrollY;
          window.scroll({
            top: y - 70,
            behavior: "smooth"
          });
        }
      }
    });
  },
  methods: {
    inViewport() {
      var bounding = this.$el.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    close() {
