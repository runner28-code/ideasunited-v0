<template>
  <v-file-input
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
