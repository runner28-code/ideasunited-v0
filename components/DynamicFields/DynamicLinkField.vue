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

<script>
import urlFormatter from "@/filters/url";

export default {
  props: {
    label: String,
    value: String,
    rules: {
      type: Array,
