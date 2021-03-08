<template>
  <div class="timeline-list" :style="timelineCssVars">
    <ul class="timeline-list__ul">
      <li v-for="item in items" :key="item.uuid">
          {{ item.dates }}
        </div>
        <div class="timeline-list__text">
          {{ item.description }}
        </div>
      </li>
    </ul>
  </div>
</template>
