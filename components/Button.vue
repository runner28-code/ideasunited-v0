<template>
  <v-btn
    @click="click"
    :to="to"
    :dark="calcTheme == 'dark'"
    :block="block"
    :xLarge="xLarge"
    :color="calcColor"
    :type="type"
    :outlined="outlined"
    :text="text"
    class="elevation-0 btn"
    :href="href"
    :target="target"
