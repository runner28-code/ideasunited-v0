<template>
  <div>
    <div
      v-if="fullpageReady"
      class="opportunity-page"
      :class="`opportunity-${currentProject.id}`"
    >
      <transition name="fade">
        <div
          class="background-lede"
          :style="backgroundLedeStyles"
          :key="currentSlide"
        >
          <div
            class="background-lede__logo"
            v-if="opportunityLogo && !currentProject.hide_frontend_logo"
          >
            <img :src="opportunityLogo" alt="Logo" />
          </div>
        </div>
      </transition>
      <div class="fullpage-outer-container">
        <div class="fullpage-container">
          <no-ssr>
            <full-page
              :options="fullpageOpts"
              ref="fullpage"
              id="fullpage"
              :skip-init="true"
            >
              <FullPageSection
                v-for="(page, idx) in currentProject.menu_pages"
                :key="idx"
                :page="page"
                :idx="idx"
                @next="fullPageMoveNext(idx)"
                @top="fullPageToTop()"
                class="section fp-auto-height-responsive"
                ref="sections"
                :forms-disabled="idx != currentSlide && idx - 1 != currentSlide"
              />
            </full-page>
          </no-ssr>
        </div>
      </div>
    </div>
    <div v-else-if="currentPage" :class="`page-${currentPage.id}`">
      <PageLead v-if="currentPage.use_lead" />
      <div class="components">
        <div
          class="component"
          v-for="(component, idx) in currentPage.components"
          :key="idx"
        >
          <component
            :value="component.resource_id"
            v-bind="component"
            :is="convertComponent(component.type)"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "./convertComponent.mixin";
import isMobileMixin from "./isMobile.mixin";
import FullPageSection from "@/components/FullPageSection";

export default {
  mixins: [mixin, isMobileMixin],
  components: { FullPageSection },
  data() {
    return {
      currentSlide: 0,
      preloadedImgBase64s: {},
      scrollDelayCounter: 0,
      scrollDelay: 5,
      clickingToSection: false,
      keyIsDown: false,
    };
  },
  mounted() {
    this.$root.$on("menuClick", (item, idx) => {
      if (item.url_type == "relative") {
        this.fullPageMoveTo(idx);
      }
    });

    this.$root.$on("mobileScroll", (y) => {
      const i = this.$refs.sections.findIndex((s) => s.$el.offsetTop > y);
      this.currentSlide = i - 1;
      const newAnchor = this.fullpageOpts.anchors[this.currentSlide];
      location.hash = `#${newAnchor}`;
    });

    this.$root.$on("fullpageRebuild", (y) => {
      if (this.$refs.fullpage && this.$refs.fullpage.api) {
        this.$refs.fullpage.api.reBuild();
        this.fullpageScrollReset();
      }
    });

    this.$root.$on("fullpageScrollReset", () => {
      this.fullpageScrollReset();
    });
