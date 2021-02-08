<template>
  <v-text-field
    :placeholder="label + (required && markRequired ? ' *' : '')"
