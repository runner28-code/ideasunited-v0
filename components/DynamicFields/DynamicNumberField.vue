<template>
  <v-text-field
    type="number"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    @input="$emit('input', $event)"
    :rules="rules"
    outlined
    @focus.stop="onFocus($event)"
  />
</template>
<script>
