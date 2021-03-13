<template>
  <v-text-field
    type="number"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
