<template>
  <client-only>
    <div class="spinner" :class="{ relative }">
      <HollowDotsSpinner
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
};
</script>

<style scope>
.spinner {
  position: absolute;
  left: 0;
  right: 0;
