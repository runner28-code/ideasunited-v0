<template>
  <div class="submission-content">
    <SearchInput v-model="search" />
    <div class="submission-content__grid">
      <SubmissionItem
        :nextId="getId(index + 1)"
        :item="item"
