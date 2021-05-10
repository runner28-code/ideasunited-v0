<template>
  <v-textarea
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
