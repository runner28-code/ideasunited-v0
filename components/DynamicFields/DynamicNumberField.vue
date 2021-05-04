<template>
  <v-text-field
    type="number"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    :rules="rules"
    outlined
    @focus.stop="onFocus($event)"
  />
