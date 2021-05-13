<template>
  <div class="grid-menu">
    <v-responsive
      v-for="item in gridMenuPages"
      :key="item.id"
      class="grid-menu__item"
      :aspect-ratio="320 / 180"
      :style="{
        backgroundImage: item.grid_menu_image.url
          ? `url(${item.grid_menu_image.large.url})`
          : ''
      }"
    >
      <nuxt-link :to="item.url" class="grid-menu__item-overlay">
        {{ item.menu_title }}
      </nuxt-link>
    </v-responsive>
  </div>
</template>

<script>
export default {
  computed: {
    gridMenuPages() {
      return this.currentProject.grid_menu_pages;
    }
  }
};
</script>

<style scoped lang="scss">
.grid-menu {
  display: flex;
