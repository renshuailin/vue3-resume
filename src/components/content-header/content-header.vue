<template>
  <div class="content-header">
    <div>
      <h1>
        <slot name="name"></slot>
      </h1>
      <h1>
        <slot name="des"></slot>
      </h1>
    </div>
    <h6>
      <slot name="zan"></slot>
    </h6>
    <div class="exit" v-show=" isShow" @click="quit">
      <my-icon id="icon-tuichu" size="35" color="text-light" />
      <div>返回</div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const router = useRouter();

    const isShow = computed(() => {
      const { path } = router.currentRoute.value;
      return path === "/" ? false : true;
    });
    const quit = () => router.go(-1);
    return {
      isShow,
      quit,
    };
  },
};
</script>

<style scoped>
.content-header {
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
}
.content-header h1 {
  color: rgb(6, 255, 247);
}
.content-header h1:last-child {
  color: #ccc;
}
.exit {
  position: absolute;
  top: 15px;
  right: 30px;
  cursor: pointer;
}
.exit > div {
  margin-top: -5px;
}
</style>