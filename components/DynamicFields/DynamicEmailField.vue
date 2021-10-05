<template>
  <v-text-field
    type="email"
    :value="value"
    @input="$emit('input', $event)"
    :rules="[...rules, $rules.email]"
    outlined
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
