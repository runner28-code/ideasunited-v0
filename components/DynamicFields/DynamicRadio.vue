<template>
  <div class="radio-group">
      {{ title }}<span v-if="required && markRequired" class="radio-group__required">*</span>
    </div>
    <v-radio-group
      class="radio-group__control"
      row
      :value="value"
