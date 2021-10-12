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
  flex-wrap: wrap;

  &__item {
    background-size: cover;
    background-position: center;
    max-width: 25%;
    position: relative;

    &-overlay {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: bold;
      background: rgba(0, 0, 0, 0.1);
      text-decoration: none;
      transition: 0.3s;
      text-shadow: 0 0 3px black;
      font-size: 36px;

      &:hover {
        background: transparent;
      }
    }
  }
}

