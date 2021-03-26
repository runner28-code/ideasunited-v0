<template>
  <div class="not-authorized">
      @disableAuth="disableAuth"
      v-show="!currentUser && !authDisabled"
    />
    <div class="error-page" v-show="currentUser || authDisabled">
      <div class="error-content">
        <div class="error-title">
          Restrict access...
