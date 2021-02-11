<template>
  <div class="submission-thank-you">
    <p
      class="submission-thank-you__text"
        successMessage
          ? parseMessage(successMessage)
          : 'Thank you for your submission. You now can head over to your profile, edit and add to your bio, and see submission status.'
