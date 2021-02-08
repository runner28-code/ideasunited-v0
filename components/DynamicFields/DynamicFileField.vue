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
      </div>
    </template>
  </v-file-input>
</template>

<script>
