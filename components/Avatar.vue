<template>
  <div class="avatar" :style="styles" v-bind="$attrs">
    {{ initals }}
  </div>
</template>

<script>
import { getHash } from "@/utils";

export default {
  props: {
    name: String,
    id: String
  },
  data() {
    return {
      colors: [
        "#d32f2f",
        "#7b1fa2",
        "#303f9f",
        "#0288d1",
        "#0097a7",
        "#00796b",
        "#689f38",
        "#afb42b",
        "#fbc02d",
        "#f57c00",
        "#5d4037",
        "#455a64",
        "#1b5e20",
        "#1a237e"
      ]
    };
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.color
      };
    },
    initals() {
      return (this.name || "Anon")
        .split(" ")
        .map(n => n[0])
        .join("")
        .substr(0, 2)
        .toUpperCase();
    },
