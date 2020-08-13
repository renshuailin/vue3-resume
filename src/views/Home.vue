<template>
  <div class="home">
    <div class="wrapper">
      <div>
        <my-icon id="icon-wangluo" color="text-warning" class="network" />
        <div class="text">欢 迎 查 看 我 的 简 历</div>
      </div>
      <div>
        <div class="content-header">
          <div>
            <h1>任帅霖</h1>
          </div>
          <h6>点赞300次</h6>
        </div>
      </div>
      <img src="../assets/img/user.jpg" alt="头像" class="user img-thumbnail" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from "vue";
const isShow = ref(false);
const change = () => (isShow.value = !isShow.value);
export default {
  name: "Home",
  components: {},
  setup() {
    return {
      isShow,
      change,
    };
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  background: url("../assets/img/bg.jpg") no-repeat center;
  background-size: 100% 120%;
}
.wrapper {
  width: 90vw;
  height: 90vh;
  background-color: rgba(44, 48, 80, 0.8);
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  margin: auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.user {
  min-width: 100px;
  height: 40vh;
  margin: 10px;
  width: 200px;
}
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
.content-header {
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
.content-header h1 {
  color: rgb(6, 255, 247);
}
</style>
