<template>
  <transition name="fade">
    <div class="content-section-item"
      v-if="!hiding"
      :class="{
        'content-section-item--no-content':
          block.content_type == 'no_content'
      }"
    >
      <v-responsive
        @click="openDialog"
        class="content-section-item__wrapper"
        :class="{
          'content-section-item__wrapper--video':
            block.content_type == 'video_player'
        }"
        :style="styles"
        :aspect-ratio="285 / 160"
      ></v-responsive>
      <div class="content-section-item__text">
        <div class="content-section-item__title">{{ block.title }}</div>
        <div class="content-section-item__subtitle">{{ block.subtitle }}</div>
      </div>

      <div
        class="content-section-item__icon"
        v-if="block.content_type == 'video_player'"
      >
        <v-icon :color="activeTheme.primary_color" size="28">$play</v-icon>
      </div>

      <SliderModal
        :prevId="prevId"
        :nextId="nextId"
        :id="block.id"
        name="content-section"
        v-model="dialog"
      >
        <ContentBlockInfo :block="block" />
      </SliderModal>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    block: Object,
    prevId: String,
    nextId: String,
    hiding: Boolean
  },
  data() {
    return {
      dialog: false
    };
  },
  mounted() {
    const { block_id } = this.$route.query;

    if (block_id == this.block.id && this.block.content_type != "new_tab") {
      this.openDialog();
    }
  },
  methods: {
    openDialog() {
      if (this.block.content_type == "no_content") return;
      if (this.block.content_type == "video_player") {
        if (this.block.video_player_type == "event") {
          this.$root.$emit("setActiveEvent", this.block.event_id);
        } else {
          const hasEventBlock = this.currentPage.components.find(
            t => t.type == "Event"
          );
          if (hasEventBlock) {
            const event_type = this.block.video_player_type;
            this.$root.$emit("setActiveEvent", {
              ...this.block,
              event_type,
              type: "content_block"
            });
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          } else {
            this.dialog = true;
          }
        }
      } else if (this.block.content_type == "new_tab") {
        if (this.block.link_url) window.open(this.block.link_url, "_blank");
      } else {
        this.dialog = true;
