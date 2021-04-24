<template>
  <v-checkbox
    class="checkbox"
    hide-details="auto"
    :value="value"
    :input-value="value"
    @change="$emit('input', $event)"
    :rules="rules"
    @focus.stop="onFocus($event)"
  >
    <template #label>
      <slot>
          @click.stop
          v-html="label + (required && markRequired ? ' *' : '')"
