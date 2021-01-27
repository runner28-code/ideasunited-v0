<template>
  <v-form
    @submit.prevent="submitCallback"
    v-model="valid"
    class="dynamic-form"
    :disabled="disabled"
  >
    <div :key="field.uuid" v-for="field in fields">
