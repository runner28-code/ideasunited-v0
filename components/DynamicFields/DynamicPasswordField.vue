<template>
  <v-text-field
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    @input="$emit('input', $event)"
    :rules="rules"
    type="password"
    outlined
  />
</template>

<script>
export default {
  props: {
    label: String,
