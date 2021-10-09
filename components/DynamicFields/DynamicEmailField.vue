<template>
  <v-text-field
    type="email"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
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
  methods: {
