<template>
    @click="onclick"
    class="schedule-item"
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
