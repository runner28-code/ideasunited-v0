<template>
  <div class="not-authorized">
    <AuthPage
      @disableAuth="disableAuth"
    />
    <div class="error-page" v-show="currentUser || authDisabled">
      <div class="error-content">
        <div class="error-title">
          Restrict access...
        </div>
