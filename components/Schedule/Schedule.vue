<template>
  <div class="schedule">
    <Title tag="h1" class="schedule-title">{{ schedule.title }}</Title>


    <div class="schedule__items">
      <div
        class="schedule__group"
        v-for="group in groupedItems"
        :key="group.date"
      >
        <div class="schedule__date">
