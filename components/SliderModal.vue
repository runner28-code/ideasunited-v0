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
    },
    openPrev() {
      this.$root.$emit(this.triggerName, this.prevId);
      this.close();
    },
    openNext() {
      this.$root.$emit(this.triggerName, this.nextId);
      this.close();
    }
  }
};
</script>

<style lang="scss">
.slider-modal {
  .v-btn.slider-modal__arrow:not(.v-btn--text):not(.v-btn--outlined):focus:before {
    opacity: 0.72;
    color: #000;
  }
}
.slider-modal {
  position: relative;
  box-shadow: none !important;
  overflow: hidden;
  display: flex;
  min-height: 80vh;
  margin: 0 !important;

  &__wrapper {
    padding: 0 40px !important;
    display: flex;
    width: 100%;
  }

  &__content {
    width: 100%;
    display: flex;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);

    &-wrapper {
      width: 100%;
      display: flex;
      .close {
        z-index: 2;
      }
    }
  }

  &__prev,
  &__next {
    position: absolute;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);
  }
  &__prev {
    left: 0px;
  }
