<template>
  <div class="about wrap">
    <Row :gutter="40">
      <i-col span="6">
        <div class="about-box">
          <div class="box-item">关于我们</div>
          <router-link to="/about/introduce" tag="div" active-class="about-active" class="box-item hand">公司介绍</router-link>
          <router-link to="/about/vision" tag="div" active-class="about-active" class="box-item hand">企业愿景</router-link>
<!--          <router-link to="/about/callus" tag="div" active-class="about-active" class="box-item hand">联系我们</router-link>-->
        </div>
        <div class="about-box" style="margin-top: 20px;">
          <div class="box-item">联系我们</div>
          <div class="box-content">
            <p>客服电话：400-1138-959</p>
            <p>工作时间：工作日09:00—17:30</p>
            <p>地址：安徽省铜陵市大市场五期1号商务楼F5号</p>
            <p>官方QQ：2781858125</p>
            <p>企业邮箱：hyt_customer@sohu.com</p>
          </div>
        </div>
      </i-col>
      <i-col span="18">
        <router-view></router-view>
      </i-col>
    </Row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {}
</script>

<style lang="less" scoped>
  .about {
    padding: 71px 0;
    .about-box {
      .box-item {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #f7f9fa;
      }
      .box-item:first-child {
        color: #fff;
        background:#262F63;
      }
      .box-content {
        color: #AFB1B2;
        font-size: 12px;
        line-height: 26px;
        padding: 20px;
        background: #f7f9fa;
      }
      .about-active {
        background-color: rgba(8, 124, 168, 0.1);
        font-weight: 700;
      }
    }
  }
</style>
