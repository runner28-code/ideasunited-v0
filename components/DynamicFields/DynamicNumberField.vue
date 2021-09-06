<template>
  <v-text-field
    type="number"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    :rules="rules"
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
    markRequired: Boolean
