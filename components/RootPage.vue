<template>
  <div v-if="currentPage" :class="`page-${currentPage.id}`">
    <PageLead v-if="currentPage.use_lead" />
    <div class="components">
      <div
        class="component"
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
