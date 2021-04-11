<template>
  <div class="page-wrapper" :style="pageStyles">
    <NotFound v-if="status == 404" />
    <NotAuthorized v-else-if="status == 403" />
    <Page v-else-if="status == 200" />
  </div>
</template>

<script>
import _ from "lodash";
export default {
  head() {
    let meta = [
      ...this.currentProject.meta_tags,
      {
        hid: "og-title",
        property: "og:title",
        content: this.currentProject?.headline
      },
      {
        hid: "og-description",
        property: "og:description",
        content: this.currentProject?.og_description || this.currentProject?.description
      },
      {
        name: "description",
        content: this.currentProject.description
      }
    ];

