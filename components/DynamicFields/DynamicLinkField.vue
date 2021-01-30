<template>
  <v-text-field
    type="text"
    :placeholder="label + (required && markRequired ? ' *' : '')"
