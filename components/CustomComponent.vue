<template>
  <div class="custom-sfc">
    <component
      v-if="loaded"
      :is="customComponent.sfc_name"
