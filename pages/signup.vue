<template>
  <div class="signup-page">
    <AuthRegisterForm v-if="!currentUser" />
    <div 
      v-if="currentUser"
      >
      <div>You are logged in.<br/><br/></div>
      <v-btn
        @click.prevent="logout()"
      >
        Logout
      </v-btn>
    </div>
  </div>
</template>

<script>
import { frontendToProfile } from "@/utils";
export default {
  layout: 'simple',
