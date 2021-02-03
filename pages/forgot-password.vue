<template>
  <div class="forgot-password-page">
    <v-form
      ref="form"
      v-model="formModel"
      @submit.prevent="submit"
