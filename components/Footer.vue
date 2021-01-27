<template>
  <v-footer app class="footer" :class="{ static: isStatic }">
    <div class="footer-container">
      <div class="footer__start">
        <a href="/" class="footer__logo">
          <img src="~/assets/images/logo.png" alt="iU Community ™" />
        </a>

        <div class="footer__separator"></div>

        <div class="copyright">© {{ year }} Ideas United</div>
