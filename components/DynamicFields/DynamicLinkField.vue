<template>
  <v-text-field
    type="text"
    v-model="localValue"
    @input="$emit('input', $event)"
    :rules="localRules"
    outlined
    validate-on-blur
