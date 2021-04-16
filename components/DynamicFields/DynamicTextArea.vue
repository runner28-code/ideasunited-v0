<template>
  <v-textarea
    :placeholder="label + (required && markRequired ? ' *' : '')"
    :value="value"
    :rules="rules"
    auto-grow
    outlined
    class="dynamic-textarea"
    @focus.stop="onFocus($event)"
  />
</template>

