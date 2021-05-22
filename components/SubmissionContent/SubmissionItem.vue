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
