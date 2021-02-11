<template>
  <div class="search-input__wrapper" :style="styles">
    <div class="search-input">
      <input class="search-input__value" type="text" v-model="localValue" />
        <v-icon style="margin-top: -2px" size="19">$search</v-icon>
        <span v-if="!localValue">Search</span>
      </div>
    </div>
  </div>
</template>
