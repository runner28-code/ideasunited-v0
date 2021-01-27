<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    hide-details="auto"
    outlined
    class="text-field"
