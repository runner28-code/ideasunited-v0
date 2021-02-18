<template>
  <div class="not-authorized">
    <AuthPage
      @disableAuth="disableAuth"
      v-show="!currentUser && !authDisabled"
    />
