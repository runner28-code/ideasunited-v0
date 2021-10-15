<template>
  <v-textarea
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    @input="$emit('input', $event)"
    :rules="rules"
    auto-grow
    outlined
    class="dynamic-textarea"
    @focus.stop="onFocus($event)"
  />
</template>

<script>
  props: {
    label: String,
    value: String,
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
  }
};
