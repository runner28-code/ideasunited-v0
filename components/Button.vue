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
    class="elevation-0 btn"
    :href="href"
    :target="target"
    :disabled="disabled"
    @focus.stop="onFocus($event)"
  >
  </v-btn>
</template>

<script>
import { getThemeByColor } from "@/utils";

export default {
  props: {
    color: String,
    large: Boolean,
    xLarge: Boolean,
    outlined: Boolean,
    block: Boolean,
    to: String,
    type: String,
    refs: Object,
