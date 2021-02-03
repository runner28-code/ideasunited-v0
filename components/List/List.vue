<template>
  <div class="commons-list">
    <div class="commons-list__wrapper text-center">
      <Title tag="h1">{{ list.headline }}</Title>
      <div class="commons-list__description" v-html="list.description"></div>
