<template>
  <div>
    <div class="file-input-wrapper" v-if="fileInput">
      <v-file-input
        class="file-input"
        :value="value"
        @input="$emit('input', $event)"
        :rules="rules"
        outlined
        prepend-icon=""
