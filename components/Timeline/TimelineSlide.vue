<template>
  <div>
    <div class="timeline-slide__date" v-if="value.first_in_day">
      {{
        (value.display_time || value.start_at)
          | moment("timezone", currentTimezone, "dddd MMM Do")
      }}
    </div>
    <v-responsive
      @click="setActive"
      @keyup.enter="setActive"
      class="timeline-slide__wrapper"
      :aspect-ratio="aspectRatio"
      role="button"
      tabindex="0"
    >
      <div :class="classList" :style="styles">
        <div class="timeline-slide--bg"></div>
        <div class="timeline-slide__text">
          <div class="timeline-slide__text-timestamp">
