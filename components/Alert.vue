<template>
  <v-snackbar
    class="alert-container"
    v-model="alert"
    top
    :timeout="alert.timeout || 15000"
  >
    <v-alert
      :icon="false"
      dismissible
      class="alert"
      dense
      :color="activeTheme ? activeTheme.primary_color : '#E12D1B'"
      :value="!!alert"
      @input="alert = $event"
    >
      <div
        :class="{ clickable: alert.onclick }"
        class="alert__message"
        v-html="alert.message"
        @click="onclick"
      ></div>
    </v-alert>
  </v-snackbar>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      alert: null
    };
  },
  mounted() {
    this.$root.$on("alert", async alert => {
      this.alert = false;
      await this.$nextTick();
      this.alert = alert;
    });
  },
  methods: {
    onclick() {
      if (this.alert.onclick) {
        this.alert.onclick();
        this.alert = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.alert {
  white-space: pre-line;
  line-height: 1.3;
  margin: 0 !important;
  width: 100%;
  padding: 0;
  height: 100%;
  font-size: 1em;
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  &__message {
    padding: 15px;

    &.clickable {
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  &::v-deep {
