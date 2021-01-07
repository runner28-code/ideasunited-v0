<template>
  <div>
    <div
      v-if="fullpageReady"
      :class="`opportunity-${currentProject.id}`"
    >
