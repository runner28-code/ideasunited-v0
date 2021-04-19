<template>
  <div class="page-wrapper">
    <NotFound v-if="status == 404" />
    <NotAuthorized v-else-if="status == 403" />
  </div>
</template>

<script>
export default {
  layout: 'root',
  computed: {
    status() {
