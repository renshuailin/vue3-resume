<template>
  <img :src="src " alt="头像" class="user img-thumbnail" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.user {
  min-width: 100px;
  height: 38vh;
  margin: 10px;
  width: 260px;
  /* background-size: cover; */
  object-fit: cover;
}
</style>