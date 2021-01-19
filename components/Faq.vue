<template>
	<div>
    <div class="faqs">
      <v-expansion-panels class="faqs__column" accordion flat>
        <v-expansion-panel
          elevation-0
          :key="index"
        >
          <div class="faq__section-header" v-if="item.header">
