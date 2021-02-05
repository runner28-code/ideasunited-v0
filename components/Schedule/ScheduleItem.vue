<template>
  <div
    @click="onclick"
    class="schedule-item"
    :style="styles"
  >
    <div class="schedule-item__start-at">
      {{
        item.start_at | moment("timezone", currentTimezone, "h:mm a zz")
