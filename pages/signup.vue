<template>
  <div class="signup-page">
    <AuthRegisterForm v-if="!currentUser" />
      v-if="currentUser"
      >
      <div>You are logged in.<br/><br/></div>
      <v-btn
        @click.prevent="logout()"
      >
