<template>
  <v-dialog
    :width="dialogWidth"
    v-model="opened"
  >
    <v-card class="auth-modal-content">
      <v-btn class="dialog-close" icon @click="cancel">
        <v-icon>$close</v-icon>
      </v-btn>
      <v-card-text>
        <AuthRegisterForm
          :dialog-state="dialogState"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

  data() {
    return {
      opened: false,
      dialogState: {
        chooseSignUp: false,
      }
    };
  },
  mounted() {
    this.$root.$on(`authModal/open`, () => {
      this.backToLogin();
      this.opened = true;
    });

