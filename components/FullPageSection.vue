<template>
  <div class="page" :data-anchor="page.url">
    <v-responsive
      class="mobile-bglede"
      :aspect-ratio="375 / 304"
      :style="mobileBgLedeStyles"
    ></v-responsive>
    <div class="page-inner">
      <div class="components">
        <div class="component content-header-component" v-if="page.content_header || page.content_subhead">
          <div class="fullpage-section__header">
            <h1 v-if="page.content_header" v-html="page.content_header"></h1>
            <h2 v-if="page.content_subhead" v-html="page.content_subhead"></h2>
          </div>
        </div>
        <div
          class="component"
          v-for="component in page.components"
          :key="component.resource_id"
        >
          <component
            :value="component.resource_id"
            :page="page"
            v-bind="component"
            :is="convertComponent(component.type)"
            :disabled="formsDisabled"
          ></component>
        </div>
      </div>
      <button
        @click.stop.prevent="$emit('next')"
        v-if="idx < currentProject.menu_pages.length - 1"
        class="fullpage-next-arrow"
        @focus.stop="onFocus($event)"
      ></button>
      <!-- <div
        @click.stop.prevent="$emit('top')"
        class="fullpage-top-arrow__wrapper"
        v-else
      >
        <button class="fullpage-top-arrow"></button>
        <div class="fullpage-top-arrow__text">
          BACK TO TOP
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import mixin from "./convertComponent.mixin";
export default {
  extends: mixin,
  props: {
    page: Object,
    idx: Number,
    formsDisabled: Boolean,
  },
  methods: {
    onFocus($event) {
      this.$root.$emit("fullpageScrollFocus", $event.srcElement);
    }
  },
  computed: {
    mobileBgLedeStyles() {
      if (!this.page) return {};
      const styles = {};
      const ledeBackground = this.page.lead_background;
      if (ledeBackground)
        styles.backgroundImage = `url(${ledeBackground.large.url})`;
      const posX = this.page.lead_background_styles.backgroundPositionX;
      if (posX) styles.backgroundPositionX = `${posX}%`;
      const posY = this.page.lead_background_styles.backgroundPositionY;
      if (posY) styles.backgroundPositionY = `${posY}%`;
      return styles;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  background-color: #56565a;
  overflow-y: scroll;
  overflow-anchor: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 46px 59px;
    min-height: 100%;
    &::after {
      content: "";
      display: block;
      height: 84px;
      width: 100%;
    }
    @media screen and (max-width: 944px) {
      padding: 20px 30px;
    }
