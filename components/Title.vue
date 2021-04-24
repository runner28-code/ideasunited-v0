<template>
  <component :style="styles" :is="tag" :class="tag">
    <slot></slot>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "h2"
