<template>
  <component :style="styles" :is="tag" :class="tag">
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
