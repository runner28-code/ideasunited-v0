<template>
  <div class="page-lead" :style="styles">
    <div class="page-lead__content">
      <div class="page-lead__title" v-if="currentPage.lead_title">
        {{ currentPage.lead_title }}
      </div>
      <div
        v-if="currentPage.lead_description"
        class="page-lead__description"
        v-html="currentPage.lead_description"
      ></div>

      <Button
        v-if="currentPage.lead_button_text"
        x-large
        :href="currentPage.lead_button_link"
        >{{ currentPage.lead_button_text }}</Button
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    styles() {
      const styles = {};
      const { lead_text_color, lead_background } = this.currentPage;

      if (lead_background) {
        styles.backgroundImage = `url(${lead_background.large.url})`;
      }

      if (lead_text_color) {
      }

      return styles;
    }
  }
};
</script>

<style scoped lang="scss">
.page-lead {
  background-size: cover;
  background-position: center;

  &__content {
    text-align: center;
    padding: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__title {
    font-weight: bold;
    font-size: 48px;
  }
