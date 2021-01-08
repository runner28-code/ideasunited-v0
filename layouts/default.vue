<template>
  <v-app
    v-if="currentProject"
    class="evp-app"
    :class="{ authorized: currentUser, not_authorized: !currentUser }"
  >
