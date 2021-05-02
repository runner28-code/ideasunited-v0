<template>
  <div class="submission-thank-you">
    <p
      class="submission-thank-you__text"
      v-html="
        successMessage
          ? parseMessage(successMessage)
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
