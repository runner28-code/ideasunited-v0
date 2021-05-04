<template>
  <div class="submission-page">
    <div class="submission-page__container">
      <SubmissionForm
        @close="formDialog = false"
        :id="submissionForm.id"
        :fields="submissionForm.submission_form"
        :title="submissionForm.title"
        :description="submissionForm.description"
        :btn-text="submissionForm.btn_text"
        :success-message="submissionForm.success_message"
      />
    </div>
  </div>
