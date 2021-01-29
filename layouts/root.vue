<template>
  <v-app
    v-if="currentProject"
    class="root"
    :class="{ authorized: currentUser, not_authorized: !currentUser }"
  >
    <client-only>
      <RootAppBar
        @toggleSidebar="drawer = !drawer"
      />
    </client-only>
    <v-main>
