<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    :rules="rules"
    outlined
    @focus.stop="onFocus($event)"
  />
</template>

<script>
export default {
