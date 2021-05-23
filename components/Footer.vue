<template>
  <v-footer app class="footer" :class="{ static: isStatic }">
    <div class="footer-container">
      <div class="footer__start">
        <a href="/" class="footer__logo">
          <img src="~/assets/images/logo.png" alt="iU Community ™" />
        </a>

        <div class="footer__separator"></div>

        <div class="copyright">© {{ year }} Ideas United</div>
      </div>
      <div class="footer__menu">
        <div class="footer__menu-item" v-if="supportForm">
          <a @click.prevent="supportDialog = true"
            >Support</a
          >
        </div>
        <div class="footer__menu-item">
          <a @click="clickFAQ"
            >FAQ</a
          >
        </div>
        <div class="footer__menu-item">
          <a target="_blank" href="mailto:community@ideasunited.com"
            >Contact Us</a
          >
        </div>
        <div class="footer__menu-item">
          <a target="_blank" href="https://ideasunited.com/terms"
            >Terms of Use</a
          >
        </div>

        <div class="footer__separator"></div>
        <div class="footer__menu-item">
          <a target="_blank" href="https://ideasunited.com/privacy">Privacy</a>
        </div>
      </div>
    </div>
    <v-dialog width="800" v-model="supportDialog">
      <v-card class="support__dialog">
        <SupportForm :support-form="supportForm"/>
      </v-card>
    </v-dialog>
  </v-footer>
</template>

<script>
import { frontendToProfile } from "@/utils";
export default {
  props: {
    isStatic: Boolean,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      supportDialog: false,
      supportForm: null,
    };
  },
  created(){
    this.fetchSupportForm();
  },
  methods: {
    async fetchSupportForm() {
      const { data } = await this.$api.Support.getForm();
      this.supportForm = data;
    },
    clickFAQ() {
      if(process.client) {
        window.location.href = frontendToProfile()[window.location.origin] + "/faq";
      }
    }
  },
  watch:{
    supportDialog:function(newValue, old){
      if(!newValue){
        this.$root.$emit('resetSupportForm');
      }
    }
  }
};
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  z-index: 7;
