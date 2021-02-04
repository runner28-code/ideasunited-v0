<template>
  <div class="schedule">
    <Title tag="h1" class="schedule-title">{{ schedule.title }}</Title>

    <div class="schedule__description" v-html="schedule.description"></div>

    <div class="schedule__items">
      <div
