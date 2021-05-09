<template>
  <v-btn
    @click="click"
    :to="to"
    :dark="calcTheme == 'dark'"
    :large="large"
    :block="block"
    :xLarge="xLarge"
    :color="calcColor"
    :type="type"
    :outlined="outlined"
    :text="text"
    :href="href"
    :target="target"
    :disabled="disabled"
    @focus.stop="onFocus($event)"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
import { getThemeByColor } from "@/utils";

export default {
