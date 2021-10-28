<template>
  <div class="eligibles">
    <a
      v-for="badge in value"
      :key="badge.id"
      class="eligible"
      :class="[`eligible--${badge.slug}`]"
      :href="badgeInfoUrl"
      target="_blank"
      <div
        class="eligible-preview"
        :style="{ backgroundImage: `url(${badge.preview.url})` }"
      ></div>
      <div class="eligible-label">{{ badge.title }}</div>
    </a>
  </div>
</template>

<script>
import { frontendToProfile } from "@/utils";
export default {
  props: {
    value: Array,
  },
  data() {
    return {
      badgeInfoUrl: frontendToProfile()[window.location.origin] + "/badge-info",
    };
  },
};
</script>

<style scoped lang="scss">
.eligibles {
  display: flex;
  justify-content: center;
}
.eligible {
  display: flex;
  align-items: center;
  margin-right: 20px;
  text-decoration: none;

  &--bronze {
    color: #c6864c;
  }
  &--gold {
    color: #ffbc10;
  }
  &--silver {
    color: #a7b7c0;
  }
  &--campus {
    color: #7b61ff;
  }
  &-label {
