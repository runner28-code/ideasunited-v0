<template>
  <div class="slider-modal-content content-block-info">
    <div
      v-if="block.content_type != 'new_tab'"
      class="slider-modal-content__side slider-modal-content__preview"
    >
      <v-responsive
        :aspect-ratio="block.content_type == 'video_player' && ['sm', 'xs'].includes($size) ? undefined : 1"
        class="slider-modal-content__preview-square"
      >
        <v-responsive
          v-if="block.content_type == 'video_player'"
          class="slider-modal-content__video"
          :aspect-ratio="16 / 9"
        >
          <VimeoPlayer
            v-if="block.video_player_type == 'vimeo'"
            :vimeoId="block.vimeo_id"
            :vimeoH="block.vimeo_h"
          />
          <YoutubePlayer
            v-else-if="block.video_player_type == 'youtube'"
            :youtubeId="block.youtube_id"
          />
          <ZoomPlayer
            v-else-if="block.video_player_type == 'zoom'"
            :zoomLink="block.zoom_url"
            :event="block"
          />
        </v-responsive>
        <Slider
          :slides="block.slides"
          v-else-if="block.content_type == 'popup' && sliderInited"
        />
      </v-responsive>
    </div>
    <div class="slider-modal-content__side slider-modal-content__content">
      <div>
        <Title
          :style="{ color: activeTheme.primary_color }"
          class="slider-modal-content__title"
          >{{ block.title }}</Title
        >
        <div v-if="block.creator">
          <div
            class="slider-modal-content__creator-info"
            v-if="block.creator.primary_working_location || block.creator.primary_role"
          >
            <span v-if="block.creator.primary_working_location">{{ block.creator.primary_working_location }}</span>
            <span v-if="block.creator.primary_role">{{ block.creator.primary_role }}</span>
          </div>
          <div
            class="slider-modal-content__creator-socials"
            v-if="block.creator.instagram || block.creator.linkedin"
          >
            <div class="slider-modal-content__creator-socials__item" v-if="block.creator.instagram">
              <a :href="instagram(block.creator.instagram)" target="_blank">
                <v-icon color="currentColor" size="24">$instagram_profile</v-icon>
              </a>
            </div>
            <div class="slider-modal-content__creator-socials__item" v-if="block.creator.linkedin">
              <a :href="block.creator.linkedin" target="_blank">
                <v-icon color="currentColor" size="24">$linkedin_profile</v-icon>
              </a>
            </div>
          </div>
        </div>
        <div
          v-html="block.description"
          class="slider-modal-content__description"
        ></div>
        <Button
          v-if="block.link_text"
          class="slider-modal-content__link"
          :href="block.link_url | url"
          target="_blank"
          large
          >{{ block.link_text }}</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: Object
  },
  data() {
    return {
      sliderInited: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.sliderInited = true;
    }, 300);
  },
    instagram(v) {
      /* eslint-disable no-useless-escape */
      const urlRegexp =
        /^http(s)?:\/\/?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

      /* eslint-disable no-useless-escape */
      const instagramHandleRegexp =
        /^([\w](?:(?:[\w]|(?:\.(?!\.))){0,28}(?:[\w]))?)$/;

      /* eslint-disable no-useless-escape */
      const atInstagramHandleRegexp =
        /^@([\w](?:(?:[\w]|(?:\.(?!\.))){0,28}(?:[\w]))?)$/;

      if (urlRegexp.test(v)) return v;
      if (instagramHandleRegexp.test(v))
        return `https://www.instagram.com/${v}`;
      if (atInstagramHandleRegexp.test(v))
        return `https://www.instagram.com/${v.substr(1)}`;

      return v;
    },
  },
};
</script>

<style scoped lang="scss">
.content-block-info {
  max-height: 100vh;
  .slider-modal-content {

    &__content {
      display: flex;
      align-items: center;
      overflow: auto;
      max-height: 100%;
      flex-basis: 500px;

      & > div {
        margin: auto;
      }
    }
    
    &__creator {
      &-info {
        font-size: 20px;
        font-weight: 900;
