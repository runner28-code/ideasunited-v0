<template>
  <div class="slider-modal-content submission-item-content">
    <div
      v-if="value && (value.preview.url || value.youtube_id || value.vimeo_id)"
      class="slider-modal-content__side slider-modal-content__preview"
    >
      <v-responsive
        class="slider-modal-content__video"
        :aspect-ratio="480 / 280"
        v-if="value.youtube_id || value.vimeo_id"
      >
        <VimeoPlayer v-if="value.vimeo_id" :vimeoId="value.vimeo_id" />
        <YoutubePlayer
          v-else-if="value.youtube_id"
          :youtubeId="value.youtube_id"
        />
      </v-responsive>
      <img v-else :src="value.preview.large.url" width="100%" />
    </div>
    <div
      class="slider-modal-content__side slider-modal-content__content"
      v-if="content.length"
    >
      <div>
        <div
          :class="'s-' + section.class_name"
          v-for="(section, idx) in content"
          :key="idx"
        >
          {{ section.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    layout: Object
  },
  computed: {
    content() {
      return this.layout.content
        .map(t => ({
          ...this.formattedData[t.field_id],
          class_name: t.uuid
        }))
        .filter(t => t);
    },
    formattedData() {
      const result = {};
      this.item.formatted_data.forEach(t => (result[t.uuid] = t));
      return result;
    },
    value() {
      const t = this.item.formatted_data.find(
        t => t.uuid == this.layout.preview
      );
      return t?.value;
    }
  }
};
</script>

<style scoped lang="scss">
.submission-item-content {
  .slider-modal-content__content {
    display: flex;
    align-items: center;
    overflow: auto;
    max-height: 100%;
