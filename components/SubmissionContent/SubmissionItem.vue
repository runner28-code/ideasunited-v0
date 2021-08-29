<template>
  <div>
    <v-responsive @click="dialog = true" :aspect-ratio="480 / 280">
      <div class="submission-item" :style="styles">
        <div class="submission-item__content">
          <div
            :class="[
              's-' + field.class_name,
              'submission-item__content--' + field.type
            ]"
            v-for="field in content"
            :key="field.id"
          >
            <span>{{
              field.value.length > 100
                ? field.value.substr(0, 100) + "..."
                : field.value
            }}</span>
          </div>
        </div>
      </div>
    </v-responsive>

    <SliderModal
      :prevId="prevId"
      :nextId="nextId"
      :id="item.id"
      name="article"
      scrollToElement
      v-model="dialog"
    >
      <SubmissionItemContent :layout="layout" :item="item" />
    </SliderModal>
  </div>
</template>

<script>
import { getHash } from "@/utils";

export default {
  props: {
    item: Object,
    prevId: String,
    nextId: String,
    layout: Object,
    previewLayout: Object
  },
  data() {
    return {
      colors: ["#1E1818", "#171313", "#140808", "#8F7878", "#8F7E7E"],
      dialog: false
    };
  },
  computed: {
    content() {
      return this.previewLayout.content
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
    preview() {
      const t = this.item.formatted_data.find(
        t => t.uuid == this.previewLayout.preview
      );

      return t?.value?.preview?.large?.url;
    styles() {
      const styles = {
        backgroundColor: this.color
      };

      if (this.preview) {
        styles.backgroundImage = `url(${this.preview})`;
      }

      if (this.backgroundImage) {
        styles.backgroundImage = this.item.background_image.large.url;
      }

      return styles;
    },
    color() {
      return this.colors[getHash(this.item.id) % this.colors.length];
    }
  }
};
</script>

<style scoped lang="scss">
