<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    hide-details="auto"
    outlined
    class="text-field"
    :placeholder="placeholder"
    :label="label"
    :type="localType"
    :rules="rules"
    @change="$emit('change')"
    ref="input"
    :suffix="suffix"
    :min="min"
    :max="max"
    :class="{ block }"
    :name="name"
    :dark="calcTheme == 'dark'"
