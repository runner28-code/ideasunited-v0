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
              const styleExist = document.querySelector(`[sfc=${sfc_name}]`);

              const style = Object.assign(document.createElement("style"), {
                textContent
              });
              style.setAttribute("sfc", sfc_name);

              const ref =
                document.head.getElementsByTagName("style")[0] || null;
              document.head.insertBefore(style, ref);

              if (styleExist) styleExist.remove();
            }
          };

          const t = loadModule(
            sfc_name + "_" + component.updated_at + ".vue",
