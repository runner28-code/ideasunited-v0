<template>
  <div
    class="text-block"
  >
    <div class="text-block__side">
      <TextblockItem :item="calcList[0]" />
      <TextblockItem
        :item="calcList[1]"
        v-if="textBlock.layout == 4"
      />
      <TextblockItem
        :item="calcList[2]"
        v-if="textBlock.layout == 4"
      />
      <TextblockItem
