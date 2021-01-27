<template>
  <div class="submission-form">
    <div class="submission-form__form">
      <client-only>
        <div v-if="submissionForm.state != 'submitted'">
          <div v-html="submissionForm.submissionForm"></div>
        </div>
