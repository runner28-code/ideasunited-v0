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
