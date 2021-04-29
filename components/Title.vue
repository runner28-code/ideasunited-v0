<template>
  <component :style="styles" :is="tag" :class="tag">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
      type: String,
      default: "h2"
    }
