<template>
  <div
    class="content-section"
    :class="[{ disable_scroll: contentSection.disable_scroll }, `content-section--${contentSection.layout_style}`]"
    v-show="filteredBlocks.length"
  >
    <Title class="content-section__title">
      <div v-html="contentSection.title "></div>
      <a
        :style="{ color: activeTheme.primary_color }"
        class="content-section__more"
        v-if="contentSection.more_link_url && contentSection.more_link_text"
        :href="contentSection.more_link_url | url"
      >
        <span>
          {{ contentSection.more_link_text }}
        </span>
        <v-icon size="30" :color="activeTheme.primary_color"
          >$chevron_right</v-icon
        >
      </a>
      <div class="content-section__title__underline" v-rellax="{speed: -0.25, center: true, percentage: 0.5}"></div>
    </Title>
    <div v-if="contentSection.subtitle" class="content-section__subtitle">
      {{ contentSection.subtitle }}
    </div>
    <div class="content-section__blocks" v-if="contentSection.disable_scroll">
      <ContentBlock
        v-for="(block, index) in filteredBlocks"
        :key="block.id"
        :nextId="getId(index + 1)"
        :prevId="getId(index - 1)"
        :block="block"
        :hiding="hideBlock(index)"
      />
    </div>
    <div class="content-section__swiper-wrapper" v-else>
      <v-btn
        :class="{ visible: visibleControls }"
        class="content-section__control content-section__control-prev"
        icon
        @click="swiperInstance.slidePrev()"
      >
        <v-icon size="40">$chevron_left</v-icon>
      </v-btn>
      <swiper
        ref="swiper"
        class="content-section__swiper"
        :options="swiperOption"
      >
        <swiper-slide
          class="content-section__swiper-slide"
          v-for="(block, index) in filteredBlocks"
          :key="block.id"
        >
          <ContentBlock
            :nextId="getId(index + 1)"
            :prevId="getId(index - 1)"
            :block="block"
          />
        </swiper-slide>
      </swiper>
      <v-btn
        :class="{ visible: visibleControls }"
        class="content-section__control content-section__control-next"
        icon
        @click="swiperInstance.slideNext()"
      >
        <v-icon size="40">$chevron_right</v-icon>
      </v-btn>
    </div>
    <div
      class="content-section__view-more"
      @click="toggleViewMore"
      v-show="filteredBlocks.length > 4"
    >
      <v-icon v-show="viewMore">$chevron_up</v-icon>
      <v-icon v-show="!viewMore">$chevron_down</v-icon>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "ContentSection",
  props: {
    resource_id: String,
    page: Object,
  },
  data() {
    return {
      swiperOption: {
        speed: 400,
        keyboard: {
          enabled: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1264: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }
      },
      timeouts: {},
      viewMore: false
    };
  },
  mounted() {
    const { swiper } = this.$refs;
    if (swiper) {
      this.swiperInstance = this.$refs.swiper.swiperInstance;
    }
    this.checkPosted();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize')); // get rellax to refresh after content loaded.
    }, 1000);
  },
  computed: {
    contentSection() {
      return (this.page || this.currentPage).content_sections[this.resource_id];
    },
    filteredBlocks() {
      return this.contentSection.blocks.filter(
        b =>
          b.posted &&
          (!b.role_ids.length ||
            _.intersection(b.role_ids, this.currentUser?.role_ids).length)
      );
    },
    visibleControls() {
      return (
        (this.$size == "md" && this.filteredBlocks.length > 3) ||
        (["lg", "xl"].includes(this.$size) && this.filteredBlocks.length > 4) ||
        (["sm", "xs"].includes(this.$size) && this.filteredBlocks.length > 1)
      );
    }
  },
  methods: {
    getId(index) {
      const block = this.filteredBlocks[index];
      return block?.posted ? block.id : null;
    },
    checkPosted() {
      this.contentSection.blocks.forEach(t => {
        if (!t.start_at) {
          this.$store.commit("page/publishContentBlock", {
            blockId: t.id,
            sectionId: this.contentSection.id
          });
        }
        if (t.start_at && !t.posted) {
          if (this.timeouts[`start_${t.id}`])
            clearTimeout(this.timeouts[`start_${t.id}`]);
          let untilStart = Date.parse(t.start_at) - Date.now();
          if (untilStart > 0) {
            this.timeouts[`start_${t.id}`] = setTimeout(() => {
              this.$store.commit("page/publishContentBlock", {
                blockId: t.id,
                sectionId: this.contentSection.id
              });
            }, untilStart);
          }
        }

        if (t.end_at && t.posted) {
          if (this.timeouts[`end_${t.id}`])
            clearTimeout(this.timeouts[`end_${t.id}`]);
          let untilEnd = Date.now() - Date.parse(t.end_at);
          if (untilEnd > 0) {
            this.timeouts[`end_${t.id}`] = setTimeout(() => {
              this.$store.commit("page/unpublishContentBlock", {
                blockId: t.id,
                sectionId: this.contentSection.id
              });
            }, untilEnd);
          }
        }
      });
    },
    toggleViewMore() {
      this.viewMore = !this.viewMore;
    },
    hideBlock(idx) {
      return (
        this.contentSection.disable_scroll &&
        "xs" == this.$size &&
        idx >= 4 &&
        !this.viewMore
    }
  }
};
</script>

<style scoped lang="scss">
.content-section {
  min-height: 300px;
  padding: 40px 75px 80px;
  @media screen and (min-width: 1905px) {
    padding: 40px 195px 200px;
  }

  &__blocks {
    display: flex;
  }

  &__control {
    visibility: hidden;
    pointer-events: none;
    margin-top: 15px;
    @media screen and (max-width: 960px) {
      width: 0;
    }

    &.visible {
      visibility: visible;
      pointer-events: all;
      margin-top: -45px;
    }
  }

  &__swiper {
    width: 100%;
    padding: 40px 10px 0;

    &:not(.swiper-container-initialized) {
      .content-section__swiper-slide {
        max-width: 320px;
        margin-right: 20px;
      }

      .swiper-wrapper {
        display: flex;
      }
    }

    &-wrapper {
      display: flex;
      align-items: center;
      width: 100%;
    }
  }

  &__title,
  &__subtitle {
    margin: 0 45px;
  }

  &__title {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:not(.disable_scroll) {
    &::v-deep {
      .content-section-item__text {
        // position: absolute;
      }
    }
  }

  &__more {
    font-size: 20px;
    text-decoration: none;
  }

  &__blocks {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    padding: 0 40px;

    &::v-deep .content-section-item {
      width: 100%;
      max-width: calc(25% - 30px);
    }
  }

  &__view-more {
    display: none;
    cursor: pointer;
    text-align: center;
    .v-icon {
      &::v-deep {
        .v-icon {
          color: inherit;
        }
      }
    }
  }

  &.disable_scroll {
    .content-section__blocks {
      margin: 40px 45px;
      padding: 0;

      @media screen and (max-width: 960px) {
        margin: 40px 10px;
      }

      &::v-deep .content-section-item {
