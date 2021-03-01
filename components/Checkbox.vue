<template>
  <v-checkbox
    class="checkbox"
    hide-details="auto"
    :input-value="value"
    @change="$emit('input', $event)"
