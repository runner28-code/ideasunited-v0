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
            {{
              (value.display_time || value.start_at)
                | moment("timezone", currentTimezone, "h:mm A zz")
            }}
          </div>
          <div class="timeline-slide__text-name">
            {{ value.short_title || value.title }}
          </div>
        </div>

        <div class="timeline-slide__now-playing">
          <div class="timeline-slide__now-playing__dot"></div>
          <span>
            now playing
          </span>
        </div>
      </div>
    </v-responsive>
  </div>
</template>

<script>
export default {
  name: "TimelineSlide",
  props: {
    value: Object,
    active: Object
  methods: {
    setActive() {
      if (this.value.posted) {
        this.$emit("setActive", this.value.id);

        if (this.value.url) {
          window.open(this.value.url, "_blank");
        }
      }
    }
  },
  computed: {
