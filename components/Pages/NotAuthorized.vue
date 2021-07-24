<template>
  <div class="not-authorized">
    <AuthPage
      @disableAuth="disableAuth"
      v-show="!currentUser && !authDisabled"
    />
    <div class="error-page" v-show="currentUser || authDisabled">
      <div class="error-content">
        <div class="error-title">
          Restrict access...
        </div>
        <div class="error-description">
          You don't have access to view this page.
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
