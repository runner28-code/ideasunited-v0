<template>
  <v-textarea
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    @input="$emit('input', $event)"
    :rules="rules"
    auto-grow
    class="dynamic-textarea"
    @focus.stop="onFocus($event)"
  />
</template>

<script>
