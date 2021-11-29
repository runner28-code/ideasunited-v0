<template>
  <v-checkbox
    class="checkbox"
    hide-details="auto"
    :value="value"
    :input-value="value"
    @change="$emit('input', $event)"
    :rules="rules"
    @focus.stop="onFocus($event)"
  >
    <template #label>
      <slot>
        <span
          @click.stop
          v-html="label + (required && markRequired ? ' *' : '')"
        ></span>
      </slot>
    </template>
  </v-checkbox>
</template>

<script>
export default {
  props: {
    label: String,
    value: [String, Object, Number, Boolean],
    rules: {
      type: Array,
      default: () => []
    },
    required: Boolean,
    markRequired: Boolean
  },
  methods: {
    onFocus($event) {
      this.$root.$emit("fullpageScrollFocus", $event.srcElement);
    }
  },
};
</script>

<style scoped lang="scss">
.checkbox {
  margin-top: 2px;
  margin-bottom: 13px;

  &::v-deep {
    .v-input__slot {
      align-items: start !important;
    }

    .v-input--selection-controls__input {
      top: 1px;
    }
