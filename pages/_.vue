<template>
  <div class="page-wrapper" :style="pageStyles">
    <NotAuthorized v-else-if="status == 403" />
    <Page v-else-if="status == 200" />
