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
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$emit('input', false)
    }
  },
  mounted() {
    this.$root.$on('leaveSignup', () => {
      window.location.href = frontendToProfile()[window.location.origin];
    });
  },
};
</script>

<style scoped lang="scss">
.signup-page {
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: whitesmoke;
  text-align: center;
  min-height: 100vh;

  &__title {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    padding-bottom: 15px;
  }

  &__form {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
    background: white;
    padding: 30px;
    max-width: 400px;
    width: 100%;

    &::v-deep {
      .text-field {
        margin-bottom: 20px;
        width: 100%;
      }
    }
  }
}
</style>

<style lang="scss">
.signup-page {
  .register {
    max-width: 590px;
  }
  .signup-btn.theme--light.v-btn.v-btn--has-bg {
    background-color: white;
  }
}
</style>