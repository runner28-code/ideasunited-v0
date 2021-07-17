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
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    value: String,
    page: Object,
  },
  data() {
    return {
      loaded: false,
      key: 1
    };
  },
  created() {
    Vue.component("Spinner", Spinner);
  },
  computed: {
    customComponent() {
      return (this.page || this.currentPage).custom_components[this.value];
    }
  },
  methods: {
    compile(component, callback) {
      return new Promise(resolve => {
        const { sfc_name } = component;

        if (process.client) {
          const {
            loadModule
          } = require("vue3-sfc-loader/dist/vue2-sfc-loader");
          const options = {
            moduleCache: {
              vue: Vue
            },
            getFile: () => {
              return component.code;
            },
            addStyle: textContent => {
