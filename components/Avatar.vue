<template>
  <div class="avatar" :style="styles" v-bind="$attrs">
    {{ initals }}
  </div>
</template>

<script>

export default {
  props: {
    name: String,
