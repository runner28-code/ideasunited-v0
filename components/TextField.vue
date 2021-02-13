<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    outlined
    class="text-field"
    :placeholder="placeholder"
    :label="label"
    :type="localType"
    :rules="rules"
    @change="$emit('change')"
    ref="input"
    validate-on-blur
    :suffix="suffix"
    :min="min"
