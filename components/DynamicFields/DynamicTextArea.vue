<template>
  <v-textarea
    :value="value"
    @input="$emit('input', $event)"
    :rules="rules"
