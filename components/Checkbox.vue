<template>
  <v-checkbox
    hide-details="auto"
    :value="value"
    :input-value="value"
    @change="$emit('input', $event)"
