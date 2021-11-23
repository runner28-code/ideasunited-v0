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
    textBlock() {
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
  
  &__4 {
    margin: 0;
  }
  &__4 &__side {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 960px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__4 &__item-wrapper {
    width: 13.54%;
    padding: 0;
    @media screen and (max-width: 960px) {
      width: 100%;
      max-width: 150px;
      margin-bottom: 1em;
    }
  }
}

@media screen and (max-width: 960px) {
  .text-block {
    display: block;
    margin: 0;

    &__side {
      min-height: 200px;
      width: 100%;
    }
  }
}
</style>


<style lang="scss">

.text-block__4 {
  .text-block__side {
    min-height: unset;
  }
  .text-block__item.with-preview {
    background-position: center;
    background-size: contain;
    position: relative;
    min-height: unset;
    &:before {
      display :block;
      position: relative !important;
