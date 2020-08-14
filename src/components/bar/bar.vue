<template>
  <div>
    <my-icon :id="iconId" :color="iconColor" :size="iconSize" class="network" />
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconId: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "",
    },
    iconSize: {
      type: [String, Number],
      default: 35,
    },
  },
};
</script>

<style scoped>
.network {
  width: 4vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 5px; */
}
.text {
  width: 4vw;
  height: 80vh;
  font-size: 30px;

  color: rgb(255, 191, 121);
  background-color: rgb(52, 57, 92);
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-lr;
  font-size: 20px;
  /* opacity: ; */
}
</style>