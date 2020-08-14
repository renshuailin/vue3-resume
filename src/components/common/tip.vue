<template>
  <div class="tip">
    <h4 :class="textColor" :style="{fontSize:`${textSize}px`}">
      <slot></slot>
    </h4>
    <div :class="['rounded',tipColor]"></div>
  </div>
</template>

<script>
export default {
  props: {
    textColor: {
      type: String,
      default: "",
    },
    textSize: {
      type: Number,
      default: 25,
    },
    tipColor: {
      type: String,
      default: "bg-white",
    },
  },
};
</script>

<style>
</style>