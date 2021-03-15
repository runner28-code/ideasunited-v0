<template>
  <v-checkbox
    class="checkbox"
    hide-details="auto"
    :value="value"
    @change="$emit('input', $event)"
    :rules="rules"
    @focus.stop="onFocus($event)"
  >
