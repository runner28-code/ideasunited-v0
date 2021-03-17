<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    hide-details="auto"
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
    :max="max"
    :class="{ block }"
    :name="name"
    :dark="calcTheme == 'dark'"
    :color="activeTheme ? activeTheme.primary_color : '#E12D1B'"
    @focus.stop="onFocus($event)"
  >
    <template #append>
      <div v-if="type == 'password'">
        <v-icon @click="togglePassword" class="input-icon-toggle" @focus="onFocus">{{
