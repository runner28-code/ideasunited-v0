<template>
  <v-text-field
    type="text"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    @input="$emit('input', $event)"
    :rules="localRules"
