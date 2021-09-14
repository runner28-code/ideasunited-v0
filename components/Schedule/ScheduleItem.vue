<template>
  <div
    @click="onclick"
    class="schedule-item"
    :class="{ clickable: item.event, dark: item.dark }"
    :style="styles"
  >
    <div class="schedule-item__start-at">
      {{
        item.start_at | moment("timezone", currentTimezone, "h:mm a zz")
      }}
    </div>
    <div class="schedule-item__content">
      <Title class="schedule-item__title">{{ item.title }}</Title>
      <div
        v-if="item.description"
        class="schedule-item__description"
        v-html="item.description"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    onclick() {
      if (this.item.event) {
        const { page_url, id } = this.item.event;
        this.$router.push(page_url + "?event_id=" + id);
        this.$root.$emit("setActiveEvent", id);
      }
    }
  },
  computed: {
    styles() {
      const result = {};
      const url =
        this.item.preview.large.url ||
        this.activeTheme.schedule_preview.large.url;

      if (url) {
        result.backgroundImage = `url(${url})`;
      } else {
        result.border = "1px solid";
      }

      return result;
    },
  }
};
</script>

<style scoped lang="scss">
.schedule-item {
  min-height: 160px;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  margin-top: 15px;

  &.clickable {
    cursor: pointer;
  }

  &.dark {
