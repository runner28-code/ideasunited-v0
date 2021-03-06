<template>
	<div>
    <div class="faqs">
      <v-expansion-panels class="faqs__column" accordion flat>
        <v-expansion-panel
          elevation-0
          v-for="(item, index) in items1"
          :key="index"
        >
          <div class="faq__section-header" v-if="item.header">
            {{ item.header }}
          </div>
          <v-expansion-panel-header v-if="item.question">
            {{ item.question }}
          </v-expansion-panel-header>
