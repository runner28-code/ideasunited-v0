<template>
  <div class="search-input__wrapper" :style="styles">
    <div class="search-input">
      <input class="search-input__value" type="text" v-model="localValue" />
      <div class="search-input__placeholder">
        <v-icon style="margin-top: -2px" size="19">$search</v-icon>
        <span v-if="!localValue">Search</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getThemeByColor } from "@/utils";

export default {
  name: "SearchInput",
  props: {
    value: String
  },
  data() {
    return {
      localValue: ""
    };
  },
  computed: {
    styles() {
      return {
        color: this.calcTheme == "dark" ? "white" : "#333"
      };
    calcTheme() {
      return getThemeByColor(this.activeTheme.primary_color);
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.localValue = value;
      }
    },
    localValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped lang="scss">
.search-input {
  height: 46px;
  position: relative;
  // max-width: 600px;
  padding: 0 20px;
  color: #181b23;

  &__wrapper {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
