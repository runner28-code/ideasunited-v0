<template>
  <div class="submission-page">
      <SubmissionForm
        @close="formDialog = false"
        :id="submissionForm.id"
        :submissionForm="submissionForm"
        :fields="submissionForm.submission_form"
