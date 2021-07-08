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
