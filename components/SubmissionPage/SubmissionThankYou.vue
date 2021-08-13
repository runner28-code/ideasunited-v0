<template>
  <div class="submission-thank-you">
    <p
      class="submission-thank-you__text"
      v-html="
        successMessage
          ? parseMessage(successMessage)
          : 'Thank you for your submission. You now can head over to your profile, edit and add to your bio, and see submission status.'
      "
    ></p>
    <p class="submission-thank-you__buttons">
      <Button :refs="$refs" large :href="profileUrl">
        {{ btnText || "Account" }}
      </Button>
    </p>
  </div>
</template>

<script>
import { frontendToProfile } from "@/utils";

export default {
  props: {
    value: Object,
    successMessage: String,
  },
  data() {
    return {
      profileUrl: frontendToProfile()[window.location.origin],
    };
  },
  methods: {
    evalInContext(string) {
      try {
        return eval("this." + string);
      } catch (error) {
        try {
          return eval(string);
        } catch (errorWithoutThis) {
          console.warn("Error en script: " + string, errorWithoutThis);
          return null;
        }
      }
    },
