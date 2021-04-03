import Vue from "vue";
import { mapState } from "vuex";

if (!Vue.__map_state_mixin__) {
  Vue.__map_state_mixin__ = true;

  Vue.mixin({
    methods: {
      scrollToInvalidInput(inputs) {
        const inputError = inputs.find((input) => input.hasError);
        if (inputError) {
          const el = inputError.$el;
          const y = el.getBoundingClientRect().top + window.scrollY - 100 - 20;

          window.scroll({
