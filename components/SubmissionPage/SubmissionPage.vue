<template>
  <div class="submission-page">
    <div class="submission-page__container">
      <SubmissionForm
        @close="formDialog = false"
        :id="submissionForm.id"
        :submissionForm="submissionForm"
        :fields="submissionForm.submission_form"
        :title="submissionForm.title"
        :description="submissionForm.description"
        :success-message="submissionForm.success_message"
      />
    </div>
  </div>
