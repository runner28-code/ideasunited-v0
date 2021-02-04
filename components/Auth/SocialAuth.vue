<template>
  <div>
    <div
      @click="oauth('cas')"
      class="social-auth__cas"
      v-if="currentProject.addons.includes('Addon::CasLogin')"
    >
        currentProject.projects_addons["Addon::CasLogin"].btn_text ||
          "Log in with CAS account"
      }}</Button>
    </div>
