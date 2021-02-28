<template>
  <v-snackbar
    v-if="alert"
    class="alert-container"
    v-model="alert"
    top
    :timeout="alert.timeout || 15000"
  >
    <v-alert
      :icon="false"
      dismissible
      class="alert"
      dense
      :color="activeTheme ? activeTheme.primary_color : '#E12D1B'"
      :value="!!alert"
      @input="alert = $event"
    >
      <div
        :class="{ clickable: alert.onclick }"
        class="alert__message"
        v-html="alert.message"
        @click="onclick"
      ></div>
    </v-alert>
  </v-snackbar>
</template>
