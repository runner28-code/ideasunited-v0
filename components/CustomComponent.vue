<template>
  <div class="custom-sfc">
    <component
      :key="key"
      v-if="loaded"
      :is="customComponent.sfc_name"
    ></component>
  </div>
