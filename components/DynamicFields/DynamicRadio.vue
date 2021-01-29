<template>
  <div class="radio-group">
    <div class="radio-group__label">
      {{ title }}<span v-if="required && markRequired" class="radio-group__required">*</span>
