<template>
  <v-text-field
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    :rules="rules"
    outlined
    @focus.stop="onFocus($event)"
