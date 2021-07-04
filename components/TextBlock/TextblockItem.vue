<template>
  <component
    :is="item.link ? 'a' : 'div'"
    :href="item.link"
    target="_blank"
    class="text-block__item-wrapper"
    :style="styles"
  >
    <div
      :style="{ backgroundImage: `url(${item.preview.large.url})` }"
      :class="{ 'with-preview': item.preview.large.url, dark: item.dark }"
      class="text-block__item"
    >
      <div class="text-block__item-container">
        <div class="text-block__item-title">{{ item.title }}</div>
        <div
          v-html="item.description"
        ></div>
      </div>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    styles() {
      return {
        color: this.item.text_color
      };
    }
  }
};
</script>

<style scoped lang="scss">
a.text-block__item-wrapper:hover {
  opacity: 0.9;
}

.text-block {
  &__item {
    position: relative;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    height: 100%;

    &.dark {
      color: white;
    }

    &.with-preview {
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
