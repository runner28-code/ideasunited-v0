<template>
  <v-text-field
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    :rules="rules"
    outlined
    @focus.stop="onFocus($event)"
  />
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
