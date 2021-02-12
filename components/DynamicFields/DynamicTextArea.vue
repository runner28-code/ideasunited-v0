<template>
  <v-textarea
    :placeholder="label + (required && markRequired ? ' *' : '')"
