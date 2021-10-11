<template>
  <v-checkbox
    class="checkbox"
    hide-details="auto"
    :value="value"
    :input-value="value"
    @change="$emit('input', $event)"
    off-icon="$checkbox_off"
    on-icon="$checkbox_on"
    :rules="rules"
    :disabled="disabled"
  >
    <template #label>
      <slot>
        <span v-html="label"></span>
      </slot>
    </template>
  </v-checkbox>
</template>

<script>
export default {
  props: {
    label: String,
    value: Boolean,
    rules: {
      type: Array,
      default: () => [],
    },
    disabled: Boolean,
  },
};
</script>

<style scoped lang="scss">
