<template>
  <div class="page-wrapper" :style="pageStyles">
    <NotFound v-if="status == 404" />
    <NotAuthorized v-else-if="status == 403" />
    <Page v-else-if="status == 200" />
  </div>
</template>

