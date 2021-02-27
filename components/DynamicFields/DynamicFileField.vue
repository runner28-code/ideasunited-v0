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
