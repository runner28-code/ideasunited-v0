<template>
  <div class="page-wrapper" :style="pageStyles">
    <NotFound v-if="status == 404" />
    <NotAuthorized v-else-if="status == 403" />
  </div>
</template>

<script>
import _ from "lodash";
export default {
  head() {
