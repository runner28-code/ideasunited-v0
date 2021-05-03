<template>
  <v-file-input
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    @input="$emit('input', $event)"
    :rules="rules"
    outlined
    prepend-icon=""
  >
    <template #append>
      <div>
        <v-icon class="input-icon-toggle"> $upload </v-icon>
      </div>
    </template>
  </v-file-input>
</template>

<script>
export default {
  props: {
    value: [typeof window === "undefined" ? Object : window.File, Object],
    placeholder: String,
    ratio: {
      type: Number,
      default: 580 / 320
    },
    circle: Boolean,
    position: {
      type: String,
      default: "center"
    },
    rules: {
