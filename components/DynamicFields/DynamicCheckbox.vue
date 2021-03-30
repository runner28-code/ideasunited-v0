<template>
  <v-checkbox
    class="checkbox"
    hide-details="auto"
    :value="value"
    :input-value="value"
    :rules="rules"
    @focus.stop="onFocus($event)"
  >
    <template #label>
      <slot>
