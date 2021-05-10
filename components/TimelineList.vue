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
    },
    items() {
