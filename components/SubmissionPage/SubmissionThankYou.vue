<template>
  <div class="submission-thank-you">
    <p
      v-html="
        successMessage
          ? parseMessage(successMessage)
          : 'Thank you for your submission. You now can head over to your profile, edit and add to your bio, and see submission status.'
      "
    ></p>
    <p class="submission-thank-you__buttons">
      <Button :refs="$refs" large :href="profileUrl">
