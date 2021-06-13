<template>
  <div class="radio-group">
    <div class="radio-group__label">
      {{ title }}<span v-if="required && markRequired" class="radio-group__required">*</span>
    </div>
    <v-radio-group
      class="radio-group__control"
      row
      :value="value"
      hide-details="auto"
      @change="$emit('input', $event)"
      :rules="rules"
      @focus.stop="onFocus($event)"
    >
      <v-radio
        v-for="item in options"
        :key="item.uuid"
        :label="item.title"
        :value="item.uuid"
        @focus.stop="onFocus($event)"
      ></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  props: {
