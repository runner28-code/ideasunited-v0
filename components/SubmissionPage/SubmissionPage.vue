<template>
  <div class="submission-page">
    <div class="submission-page__container">
      <SubmissionForm
        :id="submissionForm.id"
        :submissionForm="submissionForm"
        :fields="submissionForm.submission_form"
        :title="submissionForm.title"
        :description="submissionForm.description"
        :btn-text="submissionForm.btn_text"
