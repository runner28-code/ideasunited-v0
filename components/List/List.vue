<template>
  <div class="commons-list">
    <div class="commons-list__wrapper text-center">
      <Title tag="h1">{{ list.headline }}</Title>
      <div class="commons-list__description" v-html="list.description"></div>
    </div>
    <SearchInput v-model="search" />
    <div class="commons-list__wrapper">
      <div class="commons-list__items">
        <ListEntry v-for="entry in entries" :key="entry.id" :entry="entry" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    page: Object,
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    list() {
      return (this.page || this.currentPage).lists[this.value];
    },
    entries() {
      return this.list.entries.filter(
        t =>
          !this.search ||
          (t.title + " " + t.subtitle).toLowerCase().includes(this.search)
      );
    }
  }
};
</script>

<style scoped lang="scss">
.commons-list {
  &__wrapper {
    padding: 40px 90px;
  }
  &__items {
    display: flex;
    align-items: flex-start;
    margin: 0 -15px;
    flex-wrap: wrap;
  }

  &__description {
    color: #4a4a4a;
    padding: 25px 0;
    max-width: 800px;
    margin: auto;
  }
}

@media screen and (max-width: 960px) {
  .commons-list {
    padding: 40px 20px;
  }
