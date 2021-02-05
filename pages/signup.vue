<template>
  <div class="signup-page">
    <AuthRegisterForm v-if="!currentUser" />
    <div 
      >
      <div>You are logged in.<br/><br/></div>
      <v-btn
