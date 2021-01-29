<template>
  <div
    class="text-block"
    :class="`text-block-${textBlock.id} text-block__${textBlock.layout}`"
  >
    <div class="text-block__side">
      <TextblockItem :item="calcList[0]" />
      <TextblockItem
