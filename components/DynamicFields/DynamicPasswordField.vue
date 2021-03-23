<template>
  <v-text-field
    :placeholder="label + (required && markRequired ? ' *' : '')"
    @input="$emit('input', $event)"
    :rules="rules"
    type="password"
