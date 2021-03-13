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
