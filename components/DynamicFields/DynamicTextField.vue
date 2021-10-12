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

<script>
export default {
  props: {
    label: String,
    rules: {
      type: Array,
      default: () => []
    },
    required: Boolean,
    markRequired: Boolean
