<template>
  <div class="not-authorized">
    <AuthPage
      v-show="!currentUser && !authDisabled"
