<template>
  <div class="submission-page">
    <div class="submission-page__container">
      <SubmissionForm
        @close="formDialog = false"
        :submissionForm="submissionForm"
        :fields="submissionForm.submission_form"
