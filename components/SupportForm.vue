<template>
  <div class="support-form">
    <Title v-if="supportForm.headline" class="support-form__title">{{
      supportForm.headline
    }}</Title>
    <div v-if="supportForm.description" class="support-form__description">
      {{ supportForm.description }}
    </div>
    <DynamicForm
      :submit="submit"
      :fields="supportForm.support_form"
      v-model="form"
      v-if="!submitted"
      :btn-text="supportForm.btn_text"
    />
    <div v-else class="support-form__submitted">
      Thank you! We will process your request and reply to you shortly.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    supportForm: Object,
    page: Object,
  },
  data() {
    return {
      form: {
        support_form_id: null,
        data: {}
      },
      submitted: false
    };
  },
  mounted(){
    this.$root.$on('resetSupportForm', () => {
      if(this.submitted) {
        setTimeout(() => {
          this.form.data = {};
          this.submitted = false;
        }, 500);
      }
    });
  },
  methods: {
    async submit() {
      try {
        this.form.support_form_id = this.supportForm.id;
        this.form.user_agent = this.$ua._parsed;
        this.submitted = true;
      } catch {}
