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

    console.log(meta);

    meta = _.uniqBy(meta, function(tag) { return (tag.name || "") + "_" + (tag.property || "") });

    return {
      title: this.currentPage?.headline || this.currentProject?.headline,
      meta,
      link: [
        { rel: "icon", href: this.currentProject?.favicon.url || this.activeTheme.favicon.url || "/favicon.ico" }
      ]
    };
  },
  created() {
    if (process.client) {
      this.$cable.subscribe({
        channel: "PageChannel",
        page_id: this.page?.id,
        env: this.currentProject.env
      });
    }
  },
  beforeDestroy() {
    this.$cable.unsubscribe({
      channel: "PageChannel",
      page_id: this.page?.id,
      env: this.currentProject.env
    });
  },
  channels: {
    PageChannel: {
      received({ payload, type }) {
        switch (type) {
          case "update_page_params":
            this.$store.commit("page/set", payload);
            break;
        }
      }
    }
  },
  async asyncData({ $api, route, store }) {
    await store.dispatch("user/fetch");
    const page = await store.dispatch("page/fetch", {
      url: route.params.pathMatch
    });
    return {
      page
    };
  },
  computed: {
    pageStyles() {
      return {
        backgroundColor: this.activeTheme.body_background,
        color: this.activeTheme.body_color
      };
    },
    status() {
      if (!this.page && !this.currentProject) return 404;

      if (this.currentProject) return 200;

      if (
        (this.page.authorized && !this.currentUser) ||
        (this.currentUser &&
          this.page.role_ids.length &&
          !_.intersection(this.page.role_ids, this.currentUser.role_ids).length)
      ) {
        return 403;
