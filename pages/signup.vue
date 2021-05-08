<template>
  <div class="signup-page">
    <AuthRegisterForm v-if="!currentUser" />
    <div 
      v-if="currentUser"
      >
      <div>You are logged in.<br/><br/></div>
      <v-btn
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
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$emit('input', false)
    }
  },
  mounted() {
