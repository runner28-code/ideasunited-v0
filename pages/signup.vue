<template>
  <div class="signup-page">
    <AuthRegisterForm v-if="!currentUser" />
