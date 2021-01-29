<template>
  <div>
    <div
      @click="oauth('cas')"
      class="social-auth__cas"
      v-if="currentProject.addons.includes('Addon::CasLogin')"
    >
      <Button block x-large>{{
