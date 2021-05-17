<template>
  <v-checkbox
    class="checkbox"
    hide-details="auto"
    :value="value"
    :input-value="value"
    @change="$emit('input', $event)"
    on-icon="$checkbox_on"
    :rules="rules"
    :disabled="disabled"
  >
    <template #label>
      <slot>
        <span v-html="label"></span>
      </slot>
