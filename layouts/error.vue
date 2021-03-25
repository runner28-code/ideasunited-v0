<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
