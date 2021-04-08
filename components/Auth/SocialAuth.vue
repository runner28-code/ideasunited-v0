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
