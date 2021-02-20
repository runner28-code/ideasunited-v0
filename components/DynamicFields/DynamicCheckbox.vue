<template>
  <v-checkbox
    class="checkbox"
    :value="value"
    :input-value="value"
    @change="$emit('input', $event)"
    :rules="rules"
