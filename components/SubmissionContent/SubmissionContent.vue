<template>
  <div class="submission-content">
    <SearchInput v-model="search" />
    <div class="submission-content__grid">
      <SubmissionItem
        :prevId="getId(index - 1)"
        :nextId="getId(index + 1)"
        :item="item"
        v-for="(item, index) in list"
        :key="item.id"
        :layout="submissionContent.layout"
        :previewLayout="submissionContent.preview_layout"
      />
    </div>
    <client-only>
      <infinite-loading :identifier="infiniteId" @infinite="fetchSubmissions">
