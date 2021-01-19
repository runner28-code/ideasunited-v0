<template>
	<div>
    <div class="faqs">
        <v-expansion-panel
          elevation-0
          v-for="(item, index) in items1"
          :key="index"
        >
          <div class="faq__section-header" v-if="item.header">
