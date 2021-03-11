<template>
  <div class="not-authorized">
    <AuthPage
      @disableAuth="disableAuth"
    />
    <div class="error-page" v-show="currentUser || authDisabled">
