<template>
  <div class="page-wrapper">
    <NotFound v-if="status == 404" />
    <NotAuthorized v-else-if="status == 403" />
    <RootPage v-else-if="status == 200" />
  </div>

<script>
