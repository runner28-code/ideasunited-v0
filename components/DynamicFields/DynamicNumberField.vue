<template>
  <v-text-field
    type="number"
    :value="value"
    @input="$emit('input', $event)"
