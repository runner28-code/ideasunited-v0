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
      />
    </div>
    <div
      class="text-block__side text-block__side-double"
      v-if="[2, 3].includes(textBlock.layout)"
    >
      <TextblockItem
        :item="calcList[1]"
        v-if="[2, 3].includes(textBlock.layout)"
      />
      <TextblockItem
        :item="calcList[2]"
        v-if="[3].includes(textBlock.layout)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    page: Object,
  },
  computed: {
      return (this.page || this.currentPage).text_blocks[this.value];
    },
    calcList() {
      return this.textBlock.items.slice(0, this.textBlock.layout);
    }
  }
};
</script>

<style scoped lang="scss">
.text-block {
  margin: -10px;
  display: flex;
  flex-wrap: wrap;

  &__side {
    width: 50%;

    .text-block__item-wrapper {
      height: 100%;
    }
  }

  &__1 &__side {
    width: 100%;
  }

  &__3 &__side-double &__item-wrapper {
    height: 50%;
  }
  
