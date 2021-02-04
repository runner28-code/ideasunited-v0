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
        </div>
        <div class="footer__menu-item">
          <a @click="clickFAQ"
            >FAQ</a
