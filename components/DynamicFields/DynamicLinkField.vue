<template>
  <v-text-field
    type="text"
    :placeholder="label + (required && markRequired ? ' *' : '')"
    v-model="localValue"
    :rules="localRules"
    outlined
    validate-on-blur
    @focus.stop="onFocus($event)"
  />
</template>

<script>
import urlFormatter from "@/filters/url";
