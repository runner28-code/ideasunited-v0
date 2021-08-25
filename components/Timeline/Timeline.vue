<template>
  <div class="timeline">
    <v-btn
      :class="{ visible: visibleControls }"
      class="timeline__control"
      icon
      @click="swiperInstance.slidePrev()"
    >
      <v-icon size="40">$chevron_left</v-icon>
    </v-btn>
    <swiper ref="swiper" class="timeline__swiper" :options="swiperOption">
      <swiper-slide
        class="timeline__swiper-slide"
        v-for="event in timelineEvents"
        :key="event.id"
        :class="{ posted: event.posted }"
      >
        <TimelineSlide @setActive="setActive" :active="value" :value="event" />
      </swiper-slide>
    </swiper>

    <v-btn
      :class="{ visible: visibleControls }"
      class="timeline__control"
      icon
      @click="swiperInstance.slideNext()"
    >
      <v-icon size="40">$chevron_right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    value: Object
  },
  data() {
    return {
      active: null,
      swiperInstance: null,
      swiperOption: {
        speed: 400,
        keyboard: {
          enabled: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },

          960: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1264: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      },
      timeouts: {}
    };
  },
  created() {
    this.initOn();
    this.initEvent();
  },
  mounted() {
    this.swiperInstance = this.$refs.swiper.swiperInstance;
  },
  beforeDestroy() {
    this.$root.$off("nextEvent");
    this.$root.$off("setActiveEvent");
    this.$root.$off("chapterChange");
    Object.values(this.timeouts).forEach(t => clearTimeout(t));
  },
  methods: {
    nextEvent() {
      console.info("nextEvent");
      const idx = this.events.findIndex(t => t.id == this.value?.id);
      console.info("nextEvent idx", idx);
      const nextSlide = this.events[idx + 1];
      console.info("nextEvent nextSlide", nextSlide);
      if (nextSlide) {
        this.setActive(nextSlide.id);
      }
    },
    setActive(id) {
      const active = this.events.find(t => t.id == id);
      if (active?.posted) {
        this.$emit("input", active);
      }
    },
    initOn() {
      this.$root.$on("setActiveEvent", active => {
        switch (typeof active) {
          case "string":
            this.setActive(active);
            break;

          case "object":
            this.$emit("input", active);
            break;
        }

        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      });

      this.$root.$on("nextEvent", () => this.nextEvent());
      this.$root.$on("nextEventIfPlaying", id => {
        console.info("nextEventIfPlaying id", id);
        this.$root.$emit("checkPosted");
        if (this.value.id == id) this.nextEvent();
      });

      this.$root.$on("chapterChange", data => {
        const event = this.events.find(
          t =>
            t.vimeo_id == data.vimeo_id && t.vimeo_chapter == data.vimeo_chapter
        );

        this.setActive(event?.id);
      });
    },
    initEvent() {
      let { event_id, block_id } = this.$route.query;
      if (block_id) return;
      let activeId = _.find(this.events, t => t.id == event_id && t.posted)?.id;

      if (!activeId) {
        activeId = _.findLast(this.events, t => t.posted)?.id;
      }

      this.setActive(activeId);
    },
    availableEvent(event) {
      return (
        !event.role_ids.length ||
        _.intersection(event.role_ids, this.currentUser?.role_ids).length
      );
    }
  },
  computed: {
    visibleControls() {
      return (
        (this.$size == "md" && this.timelineEvents.length > 4) ||
        (["lg", "xl"].includes(this.$size) && this.timelineEvents.length > 6) ||
        (["sm", "xs"].includes(this.$size) && this.timelineEvents.length > 1)
      );
    },
    events() {
      const dates = {};
      return this.currentPage.events
        .map(t => {
          const startAt = this.$moment
            .tz(t.start_at, this.currentTimezone)
            .format("YYYY/MM/DD");
          if (
            dates[startAt] ||
            !this.availableEvent(t) ||
            t.hidden_from_timeline
          )
            return t;
          dates[startAt] = true;

          return { ...t, first_in_day: true };
        })
