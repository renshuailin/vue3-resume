<template>
  <div class="about">
    <div class="content box">
      <h3 class="p-10">专业技能</h3>
      <div id="box">
        <p class="text-white">熟练使用HTML+CSS的页面布局，能根据设计图完成页面制作</p>
        <p class="text-white">熟悉flex弹性布局，具备平均水平之上的审美</p>
        <p class="text-white">熟悉使用HTML5及语义化，了解Canvas动画制作，掌握CSS3动画、过渡效果等常用技术</p>
        <p class="text-white">熟练使用原生JavaScript，ES6+常用规范，了解Typescript，熟悉jQuery常用API</p>
        <p class="text-white">熟练使用Vue全家桶并配合Element-UI/Bootstrap等开发工程项目</p>
        <p class="text-white">熟练微信小程序、uni-app混合开发，并有项目经验</p>
        <p class="text-white">在项目中使用webpack/gulp等打包工具，熟悉前端工程化构建流程</p>
        <p class="text-white">熟练使用sass、git等开工具</p>
        <p class="text-white">具备一定HTTP相关知识，了解常见Web性能优化方案</p>
        <p class="text-white">精通photoshop</p>
      </div>
    </div>
    <tip text-color="text-warning" style=" text-align: center;">给我点赞吧！</tip>

    <describe-body class="d-flex align-items-center justify-content-center">
      <push-button icon-id="icon-zan" @click="changePraise()">点赞呀</push-button>
      <h1 class="text-white">已被点赞{{praise}}次</h1>
    </describe-body>
  </div>
</template>

<script>
import { praise, changePraise } from "@/lib/zan.js";

import describeBody from "@/components/page-body/describe-body.vue";
import profile from "@/components/page-body/profile/profile.vue";
import info from "@/components/page-body/info/info.vue";
import pushButton from "../components/push-button/push-button.vue";
export default {
  components: {
    describeBody,
    profile,
    info,
    pushButton,
  },
  setup() {
    return {
      praise,
      changePraise,
    };
  },
};
</script>

<style scoped>
.about {
  padding: 0 30px;
}
h3 {
  font-weight: 500;
  padding: 10px;
  color: rgb(6, 255, 247);
}
p {
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
}
.content {
  background-color: rgba(52, 57, 92, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
}
#box {
  background-color: rgba(78, 85, 136, 0.5);
  /* border-radius: 10px; */
}
.info {
  display: flex;
  justify-content: space-between;
}
.right > img {
  width: 150px;
  height: 150px;
  display: block;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
</style>