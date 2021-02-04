<template>
  <div class="submission-thank-you">
    <p
      class="submission-thank-you__text"
      v-html="
        successMessage
          ? parseMessage(successMessage)
