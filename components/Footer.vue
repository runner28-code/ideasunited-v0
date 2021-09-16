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
  padding: 10px 19px 10px 14px;
  background-color: #56565a;
  color: white;
  font-size: 14px;
  font-family: Source Sans Pro, sans-serif;
  &::v-deep {
    &.v-sheet.v-footer:not(.v-sheet--outlined) {
      box-shadow: none;
    }
  }
  
  &.static {
    position: relative;
  }

  @media screen and (max-width: 944px) {
    position: relative;
  }

  &-container {
    display: flex;
    width: 100%;
    align-items: stretch;
    justify-content: space-between;
  }

  &__start {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .copyright {
    text-transform: none;
    font-weight: 700;
  }

  &__logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 277px;
    height: 52px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  &__menu {
    display: flex;
    align-items: center;

    &-item {
      margin: 0 11px;
      font-weight: 700;

      a {
        text-decoration: none;
        color: inherit;

        &:hover {
          text-decoration: underline;
