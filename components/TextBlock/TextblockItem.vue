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
          class="text-block__item-description"
          v-html="item.description"
        ></div>
      </div>
    </div>
  </component>
</template>
