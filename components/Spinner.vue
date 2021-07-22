<template>
  <client-only>
    <div class="spinner" :class="{ relative }">
      <HollowDotsSpinner
        :animation-duration="1000"
        :size="100"
        :color="activeTheme.primary_color"
      />
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    relative: Boolean
  },
  created() {}
