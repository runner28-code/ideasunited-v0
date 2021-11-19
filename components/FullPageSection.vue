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
  }
  @media screen and (max-width: 944px) {
    padding-bottom: 0;
  }
}

.mobile-bglede {
  display: none;
  @media screen and (max-width: 944px) {
    display: flex;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
  }
}

.components {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.fullpage-next-arrow,
.fullpage-top-arrow {
  width: 69px;
  min-height: 34.5px;
  margin-top: 40px;
  background-position: center;
  background-size: contain;
  background-image: url("data:image/svg+xml,%3Csvg width='73' height='38' viewBox='0 0 73 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36.5 36.5L35.4393 37.5607C36.0251 38.1464 36.9749 38.1464 37.5607 37.5607L36.5 36.5ZM72.0607 3.06066C72.6464 2.47487 72.6464 1.52513 72.0607 0.93934C71.4749 0.353553 70.5251 0.353553 69.9393 0.93934L72.0607 3.06066ZM0.93934 3.06066L35.4393 37.5607L37.5607 35.4393L3.06066 0.93934L0.93934 3.06066ZM37.5607 37.5607L72.0607 3.06066L69.9393 0.93934L35.4393 35.4393L37.5607 37.5607Z' fill='white'/%3E%3C/svg%3E%0A");

  &__wrapper {
  }
}
.fullpage-top-arrow {
  transform: rotate(180deg);
  background-image: url("data:image/svg+xml,%3Csvg width='73' height='38' viewBox='0 0 73 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 36.939 2 L 38 0.939 C 37.414 0.354 36.464 0.354 35.878 0.939 L 36.939 2 Z M 1.378 35.439 C 0.793 36.025 0.793 36.975 1.378 37.561 C 1.964 38.146 2.914 38.146 3.5 37.561 L 1.378 35.439 Z M 72.5 35.439 L 38 0.939 L 35.878 3.061 L 70.378 37.561 L 72.5 35.439 Z M 35.878 0.939 L 1.378 35.439 L 3.5 37.561 L 38 3.061 L 35.878 0.939 Z' fill='white'/%3E%3C/svg%3E%0A");

  &__wrapper {
    text-align: center;
    cursor: pointer;
  }
  &__text {
    font-weight: 600;
    font-size: 20px;
  }
}
