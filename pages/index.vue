<template>
    <NotFound v-if="status == 404" />
    <NotAuthorized v-else-if="status == 403" />
    <RootPage v-else-if="status == 200" />
  </div>
</template>

<script>
export default {
  layout: 'root',
  computed: {
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
      } else {
        return 200;
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
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  position: relative;
  @media screen and (max-width: 944px) {
    margin-left: 0;
    height: auto;
