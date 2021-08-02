<template>
  <div :class="`col-${cols}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KrColumn",
  props: {
    cols: {
      type: String,
      required: false,
      default: "12",
    },
  },
};
</script>
