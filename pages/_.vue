<template>
  <div class="page-wrapper" :style="pageStyles">
    <NotFound v-if="status == 404" />
