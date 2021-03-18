<template>
  <div class="custom-sfc">
    <component
      :key="key"
      v-if="loaded"
      :is="customComponent.sfc_name"
    ></component>
  </div>
</template>

<script>
import Vue from "vue";
import Spinner from "./Spinner";

export default {
  props: {
    value: String,
    page: Object,
