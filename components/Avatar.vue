<template>
  <div class="avatar" :style="styles" v-bind="$attrs">
  </div>
</template>

<script>
import { getHash } from "@/utils";

export default {
  props: {
    name: String,
