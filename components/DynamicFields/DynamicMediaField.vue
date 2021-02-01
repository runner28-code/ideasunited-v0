<template>
  <div>
    <div class="file-input-wrapper" v-if="fileInput">
        class="file-input"
        :placeholder="label + (required && markRequired ? ' *' : '')"
        :value="value"
        @input="$emit('input', $event)"
        :rules="rules"
        outlined
        prepend-icon=""
        @change="handleFileChange"
        ref="fileInput"
