<template>
  <div class="submission-content">
    <SearchInput v-model="search" />
    <div class="submission-content__grid">
      <SubmissionItem
        :prevId="getId(index - 1)"
        :nextId="getId(index + 1)"
        :item="item"
        v-for="(item, index) in list"
        :key="item.id"
        :layout="submissionContent.layout"
        :previewLayout="submissionContent.preview_layout"
      />
    </div>
    <client-only>
      <infinite-loading :identifier="infiniteId" @infinite="fetchSubmissions">
        <div slot="no-more"></div>
        <div slot="no-results" class="no-results">Nothing found</div>
        <div slot="spinner">
          <Spinner />
        </div>
      </infinite-loading>
    </client-only>
    <div v-html="css"></div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    value: String,
    page: Object,
  },
  data() {
    return {
      list: [],
      infiniteId: +new Date(),
      page: 1,
      search: ""
    };
  },
  methods: {
    getId(index) {
      const item = this.list[index];
      return item?.published ? item.id : null;
    },
    async fetchSubmissions($state) {
      const params = {
        widget_submission_form_id: this.submissionContent
          .widget_submission_form_id,
        query: this.search,
        page: this.page
      const { data } = await this.$api.Submission.get(params);
      this.page += 1;

      const ids = this.list.map(t => t.id);
      const newData = data.filter(t => !ids.includes(t.id));

      this.list.push(...newData);

      if (data.length) {
        $state.loaded();
      } else {
        $state.complete();
      }
    },
    setInfiniteId: _.debounce(function() {
      this.page = 1;
      this.list = [];
      this.infiniteId += 1;
    }, 300)
  },
  computed: {
    submissionContent() {
      return (this.page || this.currentPage).submission_contents[this.value];
    },
    css() {
      const styles1 = this.submissionContent.layout.content
        .filter(t => t.styles)
        .map(t => t.styles)
        .join("\n");
      const styles2 = this.submissionContent.preview_layout.content
        .filter(t => t.styles)
        .map(t => t.styles)
        .join("\n");
      const styles = [styles1, styles2].join("\n");
      return `<style>${styles || ""}</style>`;
    }
  },
  watch: {
    search() {
      this.setInfiniteId();
    }
  }
};
</script>

