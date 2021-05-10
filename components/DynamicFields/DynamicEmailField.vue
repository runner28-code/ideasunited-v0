<template>
  <v-text-field
    type="email"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    :rules="[...rules, $rules.email]"
    outlined
    @focus.stop="onFocus($event)"
  />
</template>

<script>
export default {
