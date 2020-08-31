<template>
  <div class="home">
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">扫一扫查看微信小程序</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="margin:0 auto">
            <img src="../assets/img/wxcode.jpg" alt />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <bar icon-id="icon-wangluo" icon-color="text-warning" icon-size="35">欢 迎 查 看 我 的 简 历</bar>
      <div class="w-100">
        <content-header>
          <template #name>{{title}}</template>
          <template #des>{{des}}</template>
          <template #zan>已赞{{praise}}次</template>
        </content-header>
        <!-- <transition>
          <router-view></router-view>
        </transition>-->
        <router-view v-slot="{ Component }" class="pre-scrollable" style="max-height:70vh">
          <transition enter-active-class="animate__animated animate__zoomIn">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      <user-profile :src="src" />
    </div>
  </div>
</template>

<script>
// 赞
import { praise } from "@/lib/zan.js";
//引入头像
import userProfile from "@/components/user-profile/user-profile.vue";
//引入侧边栏
import bar from "@/components/bar/bar.vue";
//引入头部信息
import contentHeader from "../components/content-header/content-header.vue";
//引入监听
import { watch, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  components: { userProfile, bar, contentHeader },
  setup() {
    const router = useRouter();
    const title = ref();
    const des = ref("");
    // watch(
    //   router.currentRoute,
    //   ({ path, name }) => {
    //     if (path === "/") {
    //       title.value = "----任 帅 霖----";
    //     } else {
    //       title.value = name;
    //     }
    //   },
    //   {
    //     immediate: true,
    //   }
    // );
    watchEffect(() => {
      const { path, name } = router.currentRoute.value;
      if (path === "/") {
        title.value = "我的在线简历";
      } else {
        title.value = "";
      }
      if (path === "/") {
        des.value = "";
      } else {
        des.value = name;
      }
    });
    return {
      src: require("../assets/img/user.jpg"),
      title,
      des,
      praise,
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

::-webkit-scrollbar {
  display: none;
}
/* ::-webkit-scrollbar {
  width: 2px;
  background: none;
} */
</style>
