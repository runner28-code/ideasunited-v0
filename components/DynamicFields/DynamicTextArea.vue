<template>
  <v-textarea
    :placeholder="label + (required && markRequired ? ' *' : '')"
    @input="$emit('input', $event)"
    :rules="rules"
    auto-grow
    outlined
    class="dynamic-textarea"
    @focus.stop="onFocus($event)"
  />
</template>

