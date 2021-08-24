<template>
  <div class="schedule">
    <Title tag="h1" class="schedule-title">{{ schedule.title }}</Title>

    <div class="schedule__description" v-html="schedule.description"></div>
    <div class="schedule__items">
      <div
        class="schedule__group"
        v-for="group in groupedItems"
        :key="group.date"
      >
        <div class="schedule__date">
          {{
            group.date
              | moment("timezone", currentTimezone, "dddd, MMM Do")
          }}
        </div>
        <ScheduleItem v-for="item in group.items" :item="item" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    value: String,
    page: Object,
  },
  computed: {
    schedule() {
      return (this.page || this.currentPage).schedules[this.value];
    },
    groupedItems() {
      const groups = _.groupBy(this.schedule.items, t =>
        this.$moment
          .tz(t.start_at, this.currentTimezone)
          .format("YYYY/MM/DD")
      );

      return _.sortBy(
        Object.keys(groups).map(k => {
          return {
            items: _.sortBy(groups[k], t => t.start_at),
            date: groups[k][0].start_at
          };
        }),
        t => t.date
      );
    },
