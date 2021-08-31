<template>
  <client-only>
    <div class="spinner" :class="{ relative }">
      <HollowDotsSpinner
        :animation-duration="1000"
        :size="100"
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
  top: 0;
