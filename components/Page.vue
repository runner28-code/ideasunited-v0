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
