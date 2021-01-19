<template>
  <v-text-field
    @input="$emit('input', $event)"
    hide-details="auto"
