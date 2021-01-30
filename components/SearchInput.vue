<template>
  <div class="search-input__wrapper" :style="styles">
    <div class="search-input">
      <input class="search-input__value" type="text" v-model="localValue" />
      <div class="search-input__placeholder">
        <span v-if="!localValue">Search</span>
      </div>
    </div>
