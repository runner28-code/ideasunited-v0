<template>
  <div>
    <div class="file-input-wrapper" v-if="fileInput">
      <v-file-input
        class="file-input"
        :placeholder="label + (required && markRequired ? ' *' : '')"
        :value="value"
        @input="$emit('input', $event)"
