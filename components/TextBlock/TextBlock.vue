<template>
  <div
    class="text-block"
    :class="`text-block-${textBlock.id} text-block__${textBlock.layout}`"
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
        :item="calcList[3]"
        v-if="textBlock.layout == 4"
    </div>
    <div
      class="text-block__side text-block__side-double"
      v-if="[2, 3].includes(textBlock.layout)"
