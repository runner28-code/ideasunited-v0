<template>
  <div class="signup-page">
    <AuthRegisterForm v-if="!currentUser" />
    <div 
      v-if="currentUser"
      >
      <div>You are logged in.<br/><br/></div>
        @click.prevent="logout()"
      >
        Logout
      </v-btn>
    </div>
  </div>
</template>
