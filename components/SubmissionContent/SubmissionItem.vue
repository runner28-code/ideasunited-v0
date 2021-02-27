<template>
  <div>
    <v-responsive @click="dialog = true" :aspect-ratio="480 / 280">
      <div class="submission-item" :style="styles">
        <div class="submission-item__content">
          <div
            :class="[
              's-' + field.class_name,
              'submission-item__content--' + field.type
            ]"
            v-for="field in content"
            :key="field.id"
          >
            <span>{{
              field.value.length > 100
                ? field.value.substr(0, 100) + "..."
            }}</span>
          </div>
        </div>
      </div>
    </v-responsive>

