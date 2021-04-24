<template>
  <div class="not-authorized">
    <AuthPage
      @disableAuth="disableAuth"
      v-show="!currentUser && !authDisabled"
    />
      <div class="error-content">
        <div class="error-title">
          Restrict access...
        </div>
        <div class="error-description">
