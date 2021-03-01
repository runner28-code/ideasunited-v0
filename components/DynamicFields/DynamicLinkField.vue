<template>
  <v-text-field
    type="text"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    v-model="localValue"
    @input="$emit('input', $event)"
    outlined
    validate-on-blur
