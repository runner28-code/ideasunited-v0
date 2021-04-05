<template>
  <v-btn
    @click="click"
    :to="to"
    :dark="calcTheme == 'dark'"
    :large="large"
    :block="block"
    :xLarge="xLarge"
    :type="type"
    :outlined="outlined"
    :text="text"
    class="elevation-0 btn"
    :href="href"
    :target="target"
    :disabled="disabled"
    @focus.stop="onFocus($event)"
  >
