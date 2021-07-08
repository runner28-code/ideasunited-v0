<template>
  <div>
    <div
      @click="oauth('cas')"
      class="social-auth__cas"
      v-if="currentProject.addons.includes('Addon::CasLogin')"
    >
      <Button block x-large>{{
        currentProject.projects_addons["Addon::CasLogin"].btn_text ||
          "Log in with CAS account"
      }}</Button>
    </div>
    <div v-if="items.length" class="social-auth">
      <div
        @click="oauth(item.provider)"
        class="social-auth__item"
        :class="['social-auth__item--' + item.provider]"
        v-for="item in items"
        :key="item.id"
      >
        <v-icon color="white" size="24">${{ item.provider }}</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      authParams: {
        TwitterLogin: {
          provider: "twitter"
        GoogleLogin: {
          provider: "google"
        },
        FacebookLogin: {
          provider: "facebook"
        },
        LinkedinLogin: {
          provider: "linkedin"
        }
      }
    };
  },
  methods: {
    async oauth(provider) {
      // try {
      const { token } = await this.$oauth(provider);

      if (token) {
        console.info('oauth process.env.NODE_ENV', process.env.NODE_ENV);
        const cookieDomain =
          process.env.NODE_ENV === "development"
            ? "localhost"
            : "." + window.location.hostname;

        console.info('oauth cookieDomain', cookieDomain);
        cookies.set("authToken", token, null, null, cookieDomain);
        localStorage.removeItem("token");
        await this.$store.dispatch("user/fetch");

        this.$root.$emit("authModal/close");
      }
      // } catch {}
