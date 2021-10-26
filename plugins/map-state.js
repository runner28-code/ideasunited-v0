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
// Temp comment
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
        }

        this.$root.$emit("alert", payload);
      },
    },
    computed: {
      ...mapState({
        currentUser: (state) => state.user.current,
        currentProject: (state) => state.project.current,
        currentPage: (state) => state.page.current,
        datasources: (state) => state.datasources.data,
        currentTimezone(state) {
          if (state.project.current.display_local_timezone)
            return moment.tz.guess(true);
          else return state.project.current.timezone;
        },
      }),
      activeTheme() {
        return (
          this.currentPage?.active_theme || this.currentProject?.active_theme
        );
      },
