<template>
  <div>
    <div class="file-input-wrapper" v-if="fileInput">
      <v-file-input
        class="file-input"
        :placeholder="label + (required && markRequired ? ' *' : '')"
        :value="value"
        @input="$emit('input', $event)"
        :rules="rules"
        outlined
        prepend-icon=""
        @change="handleFileChange"
        ref="fileInput"
        append-icon="$upload"
        @click:append="$refs.fileInput.$el.querySelector('input').click()"
      >
      </v-file-input>
