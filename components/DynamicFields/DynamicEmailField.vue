<template>
  <v-text-field
    type="email"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    @input="$emit('input', $event)"
    :rules="[...rules, $rules.email]"
    outlined
    @focus.stop="onFocus($event)"
</template>

<script>
export default {
