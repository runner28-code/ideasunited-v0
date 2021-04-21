<template>
  <div class="not-authorized">
    <AuthPage
      @disableAuth="disableAuth"
      v-show="!currentUser && !authDisabled"
    />
    <div class="error-page" v-show="currentUser || authDisabled">
      <div class="error-content">
          Restrict access...
        </div>
        <div class="error-description">
