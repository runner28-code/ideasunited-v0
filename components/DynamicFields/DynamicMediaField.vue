<template>
  <div>
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
