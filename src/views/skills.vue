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
  </div>
</template>

<script>
export default {};
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