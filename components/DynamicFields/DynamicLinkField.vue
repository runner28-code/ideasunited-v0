<template>
  <v-text-field
    type="text"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    v-model="localValue"
    @input="$emit('input', $event)"
    :rules="localRules"
    outlined
    validate-on-blur
    @focus.stop="onFocus($event)"
  />
</template>

<script>

export default {
  props: {
    label: String,
    value: String,
    rules: {
      type: Array,
      default: () => []
    },
    required: Boolean,
    markRequired: Boolean,
    addonData: {
      type: [Object, Boolean],
      default: false
    }
  },
  data() {
    return {
      localValue: this.value,
      localRules: [...this.rules, this.$rules.url]
    };
  },
  methods: {
    onFocus($event) {
      this.$root.$emit("fullpageScrollFocus", $event.srcElement);
    }
  },
  watch: {
    localValue: {
      deep: true,
