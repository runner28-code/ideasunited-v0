<template>
  <div
    @click="onclick"
    :class="{ clickable: item.event, dark: item.dark }"
    :style="styles"
  >
    <div class="schedule-item__start-at">
      {{
        item.start_at | moment("timezone", currentTimezone, "h:mm a zz")
      }}
    </div>
    <div class="schedule-item__content">
      <Title class="schedule-item__title">{{ item.title }}</Title>
      <div
        v-if="item.description"
        class="schedule-item__description"
        v-html="item.description"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
