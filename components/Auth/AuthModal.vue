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

export default {
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

    this.$root.$on(`authModal/open/register`, () => {
      this.dialogState.chooseSignUp = true;
      this.opened = true;
    });

    this.$root.$on(`authModal/close`, () => {
      this.cancel();
    });
  },
  methods: {
    cancel() {
      this.opened = false;
      setTimeout(() => this.backToLogin(), 500);
    },
    backToLogin() {
      this.dialogState.chooseSignUp = false;
    },
  },
  computed: {
    dialogWidth() {
      if(this.dialogState.chooseSignUp && !this.currentUser) return 700;
      else return 400;
    }
  },
  watch: {
    opened(newValue) {
      if(!newValue) setTimeout(() => this.backToLogin(), 500);
    }
  },
};
</script>

<style scoped lang="scss">

.auth-modal-content {
  text-align: center;
  padding: 58px;
  @media screen and (max-width: 960px) {
    padding: 30px;
  }

