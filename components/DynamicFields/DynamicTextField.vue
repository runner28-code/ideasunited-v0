<template>
  <v-text-field
    :placeholder="label + (required && markRequired ? ' *' : '')"
    @input="$emit('input', $event)"
    :rules="rules"
    outlined
    @focus.stop="onFocus($event)"
  />
</template>

<script>
export default {
  props: {
    label: String,
