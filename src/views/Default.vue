<template>
  <div class="container default">
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('About')">
        <my-icon id="icon-tubiaozhizuomoban" color="white" size="48" />
        <h3>个 人 简 历</h3>
      </button>
      <button class="col btn btn-light rounded border-0" @click="toPage('skill')">
        <my-icon id="icon-jurassic_report" color="text-warning" size="45" />
        <h3>专 业 技 能</h3>
      </button>
    </div>
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('Resume')">
        <my-icon id="icon-zhuanyezhishijineng" color="text-danger" size="50" />
        <h3>项 目 案 例</h3>
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
const routerJump = () => {
  const router = useRouter();
  const toPage = (path) => router.push(path);
  return {
    toPage,
  };
};
export default {
  setup() {
    const { toPage } = routerJump();
    return {
      toPage,
    };
  },
};
</script>

<style>
.row {
  height: 30vh;
}
.col {
  color: white;
  margin: 10px 20px;
  background-color: rgba(255, 255, 255, 0.3);
}
</style>