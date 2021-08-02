<template>
  <flex-container>
    <kr-column cols="4">
      <Card />
    </kr-column>
    <kr-column cols="4">
      <Card />
    </kr-column>
    <kr-column cols="4">
      <Card />
    </kr-column>
    <kr-column cols="4">
      <Card />
    </kr-column>
  </flex-container>
</template>

<script>
import Card from "@/components/cards/Card.vue";
import FlexContainer from "@/components/grid/FlexContainer.vue";
import KrColumn from "@/components/grid/KrColumn";

export default {
  components: {
    Card,
    FlexContainer,
    KrColumn,
  },
};
</script>
