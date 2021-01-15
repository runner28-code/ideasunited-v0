<template>
  <div>
    <div class="file-input-wrapper" v-if="fileInput">
      <v-file-input
        :placeholder="label + (required && markRequired ? ' *' : '')"
