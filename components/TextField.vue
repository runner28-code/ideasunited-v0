<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    hide-details="auto"
    outlined
    class="text-field"
    :placeholder="placeholder"
    :label="label"
    :type="localType"
    :rules="rules"
    @change="$emit('change')"
    ref="input"
    validate-on-blur
    :suffix="suffix"
    :min="min"
    :max="max"
    :class="{ block }"
    :name="name"
    :dark="calcTheme == 'dark'"
    :color="activeTheme ? activeTheme.primary_color : '#E12D1B'"
    @focus.stop="onFocus($event)"
  >
    <template #append>
      <div v-if="type == 'password'">
        <v-icon @click="togglePassword" class="input-icon-toggle" @focus="onFocus">{{
          localType == "password" ? "$eye" : "$eye_off"
        }}</v-icon>
      </div>
    </template>
  </v-text-field>
</template>

<script>
import { getThemeByColor } from "@/utils";

export default {
  props: {
    placeholder: String,
    label: String,
    value: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    rules: Array,
    suffix: String,
    min: [String, Number],
    max: [String, Number],
    block: Boolean,
    name: String
  },
  data() {
    return {
      localType: this.type
    };
  computed: {
    calcTheme() {
      if(!this.activeTheme) return "light";
      else return getThemeByColor(this.activeTheme.body_background);
    }
  },
  methods: {
    togglePassword() {
      if (this.localType == "password") {
        this.localType = "text";
      } else {
        this.localType = "password";
      }
    },
    validate() {
      this.$refs.input.validate(true);
    },
    onFocus($event) {
      this.$root.$emit("fullpageScrollFocus", this.$el);
    }
  },
  watch: {
    type() {
