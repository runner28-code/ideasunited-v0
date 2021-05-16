<template>
  <v-checkbox
    class="checkbox"
    hide-details="auto"
    :value="value"
    :input-value="value"
    :rules="rules"
    @focus.stop="onFocus($event)"
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

