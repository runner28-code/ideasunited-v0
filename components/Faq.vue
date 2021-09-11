<template>
	<div>
    <div class="faqs">
      <v-expansion-panels class="faqs__column" accordion flat>
        <v-expansion-panel
          elevation-0
          v-for="(item, index) in items1"
          :key="index"
          <div class="faq__section-header" v-if="item.header">
            {{ item.header }}
          </div>
          <v-expansion-panel-header v-if="item.question">
            {{ item.question }}
          </v-expansion-panel-header>
          <v-expansion-panel-content v-if="item.answer" v-html="item.answer">
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels v-if="items2" class="faqs__column" accordion flat>
        <v-expansion-panel
          elevation-0
          v-for="(item, index) in items2"
          :key="index"
        >
          <div class="faq__section-header" v-if="item.header">
            {{ item.header }}
          </div>
          <v-expansion-panel-header v-if="item.question">
            {{ item.question }}
          </v-expansion-panel-header>
          <v-expansion-panel-content v-if="item.answer">
            {{ item.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>

export default {
  name: "Faq",
  props: {
    value: String,
    page: Object,
  },
  computed: {
    faq() {
      return (this.page || this.currentPage).faqs[this.value];
    },
    items1() {
      const { two_column, items } = this.faq.settings;
      if(two_column){
        const lastItem1 = Math.ceil(items.length / 2);
        return items.slice(0, lastItem1);
      } else {
        return items;
      }
    },
    items2() {
      const { two_column, items } = this.faq.settings;
      if(two_column){
        const lastItem1 = Math.ceil(items.length / 2);
        return items.slice(lastItem1);
      } else {
        return false;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.faqs {
  display: flex;
  align-items: flex-start;
  margin-top: 60px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
