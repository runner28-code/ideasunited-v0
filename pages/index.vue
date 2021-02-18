<template>
  <div class="page-wrapper">
    <NotAuthorized v-else-if="status == 403" />
    <RootPage v-else-if="status == 200" />
  </div>
</template>

