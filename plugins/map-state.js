import Vue from "vue";
import { mapState } from "vuex";
import moment from "moment-timezone";

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
            top: y,
            behavior: "smooth",
          });
        }
      },
      async $confirm({ title, description }) {
        return new Promise((resolve) => {
          this.$root.$emit("confirmDialog", {
            title,
            description,
            callback: (value) => {
              resolve(value);
            },
          });
        });
      },
      $alert(message) {
        let payload;
        if (typeof message == "string") {
          payload = { message };
        } else if (typeof message == "object") {
          payload = message;
