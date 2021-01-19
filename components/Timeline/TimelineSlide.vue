<template>
    <div class="timeline-slide__date" v-if="value.first_in_day">
      {{
        (value.display_time || value.start_at)
          | moment("timezone", currentTimezone, "dddd MMM Do")
