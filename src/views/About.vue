<template>
  <div class="about">
    <div class="content box">
      <!-- <h3 class="text-white p-10">基本信息</h3> -->
      <div id="box " class="info">
        <div class="left">
          <h2 class="text-white">任帅霖</h2>
          <h4 class="mt-4 text-white">年龄：25</h4>
          <h4 class="text-white">联系电话：155-7434-6624</h4>
          <h4 class="text-white">邮箱地址：41654026@qq.com</h4>
        </div>
        <div class="right">
          <img src="../assets/img/6d38a189263167de9d1e21bf53c1b30.jpg" alt />
        </div>
      </div>
    </div>
    <div class="content box">
      <h3 class="p-10">教育经历</h3>
      <div id="box" class="info">
        <p class="text-white">2013.6--2016.9</p>
        <p class="text-white" style="margin-right:auto">湖南大众传媒职业技术学院</p>
        <p class="text-white">环境与艺术专业</p>
      </div>
      <p id="box" class="text-white">色彩搭配、设计学、艺术与材料学、展示设计、信息创意设计、人体工程学、设计构成、版式设计、Photoshop、CAD等</p>
    </div>
    <div class="content box">
      <h3 class="p-10">工作经历</h3>
      <div id="box" class="info">
        <p class="text-white">2016.6--2018.6</p>
        <p class="text-white">长沙漫步科技有限公司</p>
        <p class="text-white">平面设计师</p>
      </div>
      <ul id="box" class="text-white">
        <li>平面宣传品的平面设计及营销为载体设计工作</li>
        <li>在设计中加入现代流行元素</li>
        <li>对公司内部文件进行设计排版优化</li>
        <li>了解设计市场走向，在工作中能做设计满意的产品</li>
      </ul>

      <div id="box" class="mt-4 info">
        <p class="text-white">2018.6--2020.4</p>
        <p class="text-white">湖南亚源商业管理有限公司</p>
        <p class="text-white">平面设计师</p>
      </div>
      <ul id="box" class="text-white">
        <li>负责完成公司各类平面、策划设计工作</li>
        <li>为公司日常活动及推广提供支持和持续设计优化</li>
        <li>协助公司网站人员完成网站的线上线下推广平面素材设计，包括banner、易拉宝等</li>
        <li>具备一定文字功底，在公司微信公众号中原创多篇推广软文</li>
        <li>在工作中及时与项目主管进行需求沟通，在规定的时间内，提前完成设计产品的交付</li>
      </ul>
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
ul {
  /* height: 160px; */
}
li {
  margin-left: 30px;
  line-height: 32px;
}
</style>