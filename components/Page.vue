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

    this.$root.$on("fullpageScrollFocus", (elem) => {
      this.fullpageScrollFocus(elem);
    });

    this.currentProject.menu_pages.forEach((page) => {
      const ledeBackground = page.lead_background;
      if (ledeBackground) this.preloadSlide(ledeBackground.large.url || ledeBackground.url);
    });
    setTimeout(() => {
      if (this.$refs.fullpage) {
        this.$refs.fullpage.init();
      }
    }, 0);
    window.addEventListener('keydown', this.keyDownHandler);
    window.addEventListener('keyup', this.keyUpHandler);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.keyDownHandler);
    window.removeEventListener("keyup", this.keyUpHandler);
  },
  methods: {
    async fullPageMoveTo(idx) {
      this.clickingToSection = true;
      const newAnchor = this.fullpageOpts.anchors[idx + 1];
      location.hash = `#${newAnchor}`;
      this.$refs.fullpage.api.moveTo(idx + 1, true, { force: true });
      document.querySelectorAll(".page").forEach((el) => (el.scrollTop = 0)); // official fullpage breaks this. It can be fixed with the scrollOverflowReset extension, but it's pretty costly.
      if (this.isMobile) {
        this.$root.$emit(
          "mobileScrollTo",
          this.$refs.sections[idx].$el.offsetTop
        );
      }

      if (this.isProduction()) {
        this.$gtag.event("section_move_to", {
          opportunity: this.currentProject.title,
          section: this.$refs.sections[idx].page.title,
        });
      }
    },
    isProduction() {
      return (
        this.currentProject &&
        this.currentProject.production_domain == window.location.hostname
      );
    },
    fullPageMoveNext(idx) {
      if (idx != -1 && idx + 1 < this.fullpageOpts.anchors.length) {
        this.fullPageMoveTo(idx + 1);
      }
    },
    fullPageToTop() {
      this.fullPageMoveTo(0);
    },
    srcExt(src) {
      const parts = src.split(".");
      return parts[parts.length - 1];
    },
    preloadSlide(src) {
      if (!this.preloadedImgBase64s[src]) {
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          canvas.getContext("2d").drawImage(img, 0, 0);
          const ext = this.srcExt(src);
          switch (ext) {
            case "png":
              this.preloadedImgBase64s[src] = canvas.toDataURL("image/png");
              break;
            case "gif":
              this.preloadedImgBase64s[src] = src;
              break;
            default:
              this.preloadedImgBase64s[src] = canvas.toDataURL("image/jpg");
          }
        };
        img.src = src;
      } else {
      }
    },
    goToHash(hash) {
      const url = hash.substring(1);
      const idx = this.currentProject.menu_pages.findIndex((p) => p.url == url);
      if (idx != -1) this.$nextTick(() => { this.fullPageMoveTo(idx); });
    },
    fullpageScrollReset() {
      const fpScrollable = document.querySelector('.fp-scrollable');
      if(fpScrollable) fpScrollable.scrollTo(0, 0);
    },
    fullpageScrollFocus(elem) {
      if(!process.client) return;
      const fpScrollable = document.querySelector('.fp-scrollable');
      if(fpScrollable) {
        fpScrollable.scrollTo(0, 0);

        this.$nextTick(() => {
          if(this.keyIsDown) {

            const viewportOffset = elem.getBoundingClientRect();
            if(viewportOffset.y > window.innerHeight) {
              const iScrollInstance = fpScrollable.fp_iscrollInstance
              iScrollInstance.scrollToElement(elem);
            }
          }
        });
      }
    },
    keyDownHandler(e) {
      if(!e.key) return;
      this.keyIsDown = true;
    },
    keyUpHandler(e) {
      if(!e.key) return;
      this.keyIsDown = false;
    },
  },
  computed: {
    page() {
      if (!this.currentProject || this.currentProject.menu_pages.length == 0)
        return false;
      return this.currentProject.menu_pages[this.currentSlide];
    },
    backgroundLedeStyles() {
      if (!this.page) return {};
      const styles = {};
      const ledeBackground = this.page.lead_background;
      if (ledeBackground) {
        const src = ledeBackground.large.url || ledeBackground.url;
        if (this.preloadedImgBase64s[src]) {
          styles.backgroundImage = `url(${this.preloadedImgBase64s[src]})`;
        } else {
          styles.backgroundImage = `url(${src})`;
        }
      }
      const posX = this.page.lead_background_styles.backgroundPositionX;
      if (posX) styles.backgroundPositionX = `${posX}%`;
      const posY = this.page.lead_background_styles.backgroundPositionY;
      if (posY) styles.backgroundPositionY = `${posY}%`;
      return styles;
    },
    fullpageReady() {
      return this.currentProject && this.currentProject.menu_pages.length;
    },
    fullpageOpts() {
      if (!this.fullpageReady) return {};
      const anchors = this.currentProject
        ? this.currentProject.menu_pages.map((p) => p.url)
        : [];
      return {
        licenseKey: "DA96DFEC-B925450B-86C1417F-BD01833B",
        duration: 200,
        scrollingSpeed: 500,
        scrollOverflow: true,
        scrollOverflowOptions: {
          preventDefault: false
        },
        anchors,
        responsiveWidth: 945,
        scrollBar: false,
        onLeave: (origin, destination, direction) => {
          this.scrollDelayCounter++;
          if (
            !this.clickingToSection &&
