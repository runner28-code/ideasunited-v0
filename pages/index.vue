<template>
  <div class="page-wrapper">
    <NotFound v-if="status == 404" />
    <RootPage v-else-if="status == 200" />
  </div>
</template>

<script>
