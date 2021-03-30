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
