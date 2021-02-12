<template>
  <div>
    <div
      @click="oauth('cas')"
      class="social-auth__cas"
    >
      <Button block x-large>{{
        currentProject.projects_addons["Addon::CasLogin"].btn_text ||
          "Log in with CAS account"
      }}</Button>
    </div>
    <div v-if="items.length" class="social-auth">
      <div
        @click="oauth(item.provider)"
