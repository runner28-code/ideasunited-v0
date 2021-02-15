<template>
  <div>
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
