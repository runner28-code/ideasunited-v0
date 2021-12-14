<template>
  <v-btn
    @click="click"
    :to="to"
    :dark="calcTheme == 'dark'"
    :large="large"
    :block="block"
    :xLarge="xLarge"
    :color="calcColor"
    :type="type"
    :text="text"
    class="elevation-0 btn"
    :href="href"
    :target="target"
    :disabled="disabled"
    @focus.stop="onFocus($event)"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
import { getThemeByColor } from "@/utils";

export default {
  props: {
    color: String,
    large: Boolean,
    xLarge: Boolean,
    outlined: Boolean,
    block: Boolean,
    to: String,
    type: String,
    refs: Object,
    text: Boolean,
    href: String,
    target: String,
    disabled: Boolean
  },
  computed: {
    calcColor() {
      return this.color || (this.activeTheme ? this.activeTheme.primary_color : '#E12D1B');
    },
    calcTheme() {
      return getThemeByColor(this.calcColor);
    }
  },
  methods: {
    click() {
      if (this.type == "submit") {
        if (this.refs?.form && !this.refs.form.validate()) {
          return this.scrollToInvalidInput(this.refs.form.inputs);
        }
      }

      this.$emit("click");
    },
    onFocus($event) {
      this.$root.$emit("fullpageScrollFocus", $event.srcElement);
    }
  }
};
</script>

<style scoped lang="scss">
.btn.v-btn.v-btn--disabled.v-btn--has-bg {
  background: #e7e7e7 !important;
  color: #928d8d !important;
}

.btn::v-deep span {
  font-weight: bold;
}
