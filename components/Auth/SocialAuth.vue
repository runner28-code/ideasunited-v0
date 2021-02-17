<template>
  <div>
      @click="oauth('cas')"
      class="social-auth__cas"
      v-if="currentProject.addons.includes('Addon::CasLogin')"
    >
      <Button block x-large>{{
        currentProject.projects_addons["Addon::CasLogin"].btn_text ||
          "Log in with CAS account"
      }}</Button>
    </div>
    <div v-if="items.length" class="social-auth">
      <div
        @click="oauth(item.provider)"
