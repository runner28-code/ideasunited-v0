<template>
  <div class="timeline-list" :style="timelineCssVars">
    <ul class="timeline-list__ul">
      <li v-for="item in items" :key="item.uuid">
        <div class="timeline-list__date">
          {{ item.dates }}
        </div>
        <div class="timeline-list__text">
          {{ item.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Timeline",
  props: {
    value: String,
    page: Object,
  },
  computed: {
    timelineList() {
      return (this.page || this.currentPage).timeline_lists[this.value];
    },
    items() {
      return this.timelineList?.settings?.items;
    },
    timelineCssVars() {
      return {
        '--dot-color': this.timelineList?.settings?.dot_color || "currentColor",
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-list {
  &__ul {
    list-style: none;
    padding-left: 0;
    li {
      display: flex;
      > div {
        width: 50%;
      }
      &:not(:last-child) {
        .timeline-list__date::before {
          display: block;
          content: "";
          background: currentColor;
          position: absolute;
          top: 15px;
          bottom: -16px;
          right: -1.5px;
          width: 3px;
        }
      }
    }
  }

  &__date {
    text-align: right;
    position: relative;
    padding-right: 21px;
    &::after {
      display: block;
      content: "";
      width: 15px;
      height: 15px;
      position: absolute;
      right: -7.5px;
      border-radius: 7.5px;
      top: 8px;
      background: var(--dot-color);
    }
