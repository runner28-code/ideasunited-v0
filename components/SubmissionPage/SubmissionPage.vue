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
        :btn-text="submissionForm.btn_text"
        :success-message="submissionForm.success_message"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    page: Object,
  },
  data() {
    return {
      formDialog: false,
    };
  },
  computed: {
    submissionForm() {
      return (this.page || this.currentPage).submission_forms[this.value];
    },
  },
};
</script>
<style scoped lang="scss">
.submission-page {
  &__container {
    max-width: 900px;
    margin: auto;
    width: 100%;
  }
  &__description {
    font-size: 18px;
    margin: 25px 0;
