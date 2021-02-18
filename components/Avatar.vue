<template>
  <div class="avatar" :style="styles" v-bind="$attrs">
    {{ initals }}
  </div>
</template>

import { getHash } from "@/utils";

export default {
  props: {
    name: String,
