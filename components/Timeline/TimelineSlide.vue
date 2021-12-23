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
  },
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
    classList() {
      const { id, status } = this.value;
      return {
        active: this.isActive,
        earlier: status == "earlier",
        just_posted: status == "just_posted",
        soon: status == "coming_soon",
        "timeline-slide": true
      };
    },
    isActive() {
      return this.value.id == this.active?.id;
    },
    styles() {
      const preview =
        this.value.preview?.thumb?.url ||
        this.activeTheme.event_preview?.thumb?.url;

      return {
        backgroundImage: `url(${preview})`,
        borderColor: this.isActive
          ? this.activeTheme.primary_color
          : "rgba(16, 24, 32, 0.6)"
      };
    },
    aspectRatio() {
      const aspectRatio = {
        sm: 16 / 8,
        xs: 16 / 8
      };

      return (
        this.$store.state.application.timelineAspectRatio ||
        aspectRatio[this.$size] ||
        16 / 8
      );
    },
  }
};
</script>

<style scoped lang="scss">
.timeline-slide__wrapper {
  overflow: visible;
  flex: none;
}
.timeline-slide {
  background: black;
  max-width: 220px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
  box-sizing: border-box;
  border: 4px solid rgba(16, 24, 32, 0.6);

  &--bg {
    position: absolute;
    left: -0px;
    right: -0px;
    top: -0px;
    bottom: -0px;
    background: rgba(16, 24, 32, 0.6);
    border-radius: 6px;
  }

  &__date {
    margin-top: -30px;
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;
    opacity: 0.6;
    position: absolute;
    white-space: nowrap;
  }

  &__text {
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    position: relative;
    height: 100%;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-timestamp {
      margin-bottom: 5px;
      font-size: 12px;
    }
    &-timestamp,
    &-name {
      width: 100%;
    }
  }

  &__now-playing {
    font-weight: bold;
    font-size: 9px;
    line-height: 1.2;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: white;
    align-items: center;
    position: absolute;
    color: #101820;
    padding: 4px 11px;
    border-radius: 20px;
    left: 50%;
    bottom: -10px;
    margin-left: -46px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    display: none;

    &__dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #da291c;
      box-shadow: 0px 0px 4px #da291c;
      margin-right: 5px;
    }
  }

  &.active {
  }

