<template>
  <div v-if="currentPage" :class="`page-${currentPage.id}`">
    <PageLead v-if="currentPage.use_lead" />
    <div class="components">
      <div
        class="component"
        v-for="(component, idx) in currentPage.components"
        :key="idx"
      >
        <component
          :value="component.resource_id"
          v-bind="component"
          :is="convertComponent(component.type)"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import ContentSection from "./ContentSection/ContentSection";
import Event from "./Event/Event";
import Countdown from "./Countdown";
import TextBlock from "./TextBlock/TextBlock";
import Schedule from "./Schedule/Schedule";
import List from "./List/List";
import HtmlBlock from "./HtmlBlock";
import SubmissionPage from "./SubmissionPage/SubmissionPage";
import SubmissionContent from "./SubmissionContent/SubmissionContent";
import SupportForm from "./SupportForm";
import CustomComponent from "./CustomComponent";
import Presentation from "./Presentation/Presentation";
import RegistrationForm from "./RegistrationForm";

export default {
  components: {
    ContentSection,
    Countdown,
    Event,
    TextBlock,
    Schedule,
    List,
    SubmissionPage,
    HtmlBlock,
    SupportForm,
    SubmissionContent,
    Presentation,
    CustomComponent,
    RegistrationForm
  },
  methods: {
    convertComponent(type) {
      const list = {
