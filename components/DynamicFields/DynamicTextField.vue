<template>
  <v-text-field
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    @input="$emit('input', $event)"
    :rules="rules"
    outlined
    @focus.stop="onFocus($event)"
  />
</template>

export default {
  props: {
    label: String,
    value: String,
    rules: {
      type: Array,
      default: () => []
    },
