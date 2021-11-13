<template>
  <v-file-input
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    @input="$emit('input', $event)"
    :rules="rules"
    outlined
    prepend-icon=""
  >
    <template #append>
      <div>
        <v-icon class="input-icon-toggle"> $upload </v-icon>
      </div>
    </template>
  </v-file-input>
</template>

<script>
export default {
  props: {
    value: [typeof window === "undefined" ? Object : window.File, Object],
    placeholder: String,
    ratio: {
      type: Number,
      default: 580 / 320
    },
    circle: Boolean,
    position: {
      type: String,
      default: "center"
    },
    rules: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: "cover"
    },
    required: Boolean,
    markRequired: Boolean,
    label: String,
    showLabel: Boolean
  },
};
</script>

<style scoped lang="scss">
.uploader {
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  border: 2px dashed rgba(0, 0, 0, 0.38);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  height: 100px;
  margin-bottom: 30px;

  &-wrapper {
    position: relative;
  }

  &__label {
    font-weight: bold;
  }

  &__delete {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
  }

  &__validation {
    &:not(.v-input--has-state) {
      display: none !important;
    }
    padding: 0 !important;
    &::v-deep {
      .v-input__slot {
        display: none !important;
      }
    }
