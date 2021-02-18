<template>
  <div class="commons-list">
      <Title tag="h1">{{ list.headline }}</Title>
      <div class="commons-list__description" v-html="list.description"></div>
    </div>
    <SearchInput v-model="search" />
    <div class="commons-list__wrapper">
