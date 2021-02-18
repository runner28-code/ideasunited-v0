<template>
  <div class="timeline-list" :style="timelineCssVars">
    <ul class="timeline-list__ul">
        <div class="timeline-list__date">
          {{ item.dates }}
        </div>
        <div class="timeline-list__text">
          {{ item.description }}
        </div>
