<template>
  <div class="list-entry">
    <div
      v-if="entry.preview.thumb.url"
      :style="{ backgroundImage: `url(${entry.preview.thumb.url})` }"
      class="list-entry__preview"
    ></div>
    <div class="list-entry__content">
      <div
        :style="{ color: activeTheme.primary_color }"
        class="list-entry__title"
      >
        {{ entry.title }}
      </div>
      <div class="list-entry__subtitle" v-html="entry.subtitle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  }
};
</script>

<style scoped lang="scss">
.list-entry {
