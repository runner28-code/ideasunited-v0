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
      };
      const { data } = await this.$api.Submission.get(params);
      this.page += 1;
