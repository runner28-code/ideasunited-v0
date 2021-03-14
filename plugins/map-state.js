import Vue from "vue";
import { mapState } from "vuex";
import moment from "moment-timezone";

if (!Vue.__map_state_mixin__) {
  Vue.__map_state_mixin__ = true;

  Vue.mixin({
      scrollToInvalidInput(inputs) {
        const inputError = inputs.find((input) => input.hasError);
        if (inputError) {
          const el = inputError.$el;
