<template>
  <div class="signup-page">
    <AuthRegisterForm v-if="!currentUser" />
    <div 
      v-if="currentUser"
      >
      <v-btn
        @click.prevent="logout()"
      >
        Logout
      </v-btn>
    </div>
  </div>
</template>

