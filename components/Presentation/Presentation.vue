<template>
  <div
    class="presentation"
    v-if="presentation.broadcasting"
    :key="presentation.active_slide.id"
  >
    <PresentationImage
      :presentation="presentation"
      :slide="presentation.active_slide"
      v-if="presentation.active_slide.slide_type == 'image'"
    />
    <PresentationVimeo
      :presentation="presentation"
      v-if="presentation.active_slide.slide_type == 'vimeo'"
    />
    <PresentationYoutube
      :presentation="presentation"
      :slide="presentation.active_slide"
      v-if="presentation.active_slide.slide_type == 'youtube'"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    page: Object,
  },
  computed: {
    presentation() {
      return (this.page || this.currentPage).presentations[this.value];
    }
  }
};
</script>

<style scoped lang="scss">
