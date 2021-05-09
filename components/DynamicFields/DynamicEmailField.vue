<template>
  <v-text-field
    type="email"
    :value="value"
    @input="$emit('input', $event)"
    :rules="[...rules, $rules.email]"
    outlined
    @focus.stop="onFocus($event)"
  />
</template>

<script>
export default {
