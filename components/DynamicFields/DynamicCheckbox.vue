<template>
  <v-checkbox
    class="checkbox"
    hide-details="auto"
    :value="value"
    :input-value="value"
    @change="$emit('input', $event)"
    :rules="rules"
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
