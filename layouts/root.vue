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
      <SideBar v-model="drawer" />
    </client-only>
    <v-main>
      <HomePageLede />
      <Nuxt :key="key" ref="main-content" />
      <Footer :is-static="true"/>
    </v-main>
    <Alert />
