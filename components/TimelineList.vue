<template>
  <div class="timeline-list" :style="timelineCssVars">
      <li v-for="item in items" :key="item.uuid">
        <div class="timeline-list__date">
          {{ item.dates }}
        </div>
        <div class="timeline-list__text">
          {{ item.description }}
        </div>
      </li>
