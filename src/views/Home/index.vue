<template>
  <div class="home">
    <AppSwiper :data="banners" />
    <!--  -->
    <div class="ldq-flex wrap section">
      <ModelCard
        v-for="(item, index) in ModelCard"
        :key="index"
        :src="item.src"
        :title="item.title"
        :content="item.content"
      />
    </div>
    <!-- 加油卡充值 -->
    <div style="background: #f7fafc">
      <div class="wrap section">
        <AppTag title="加油卡充值" tag="安全快捷，车主必备" color="#4E71D7" />
        <div class="ldq-flex" :style="{ marginTop: '30px', height: '310px' }">
          <img :src="require('@/assets/img/card1.png')" width="280" />
          <RechargeCard title="油卡套餐" type="1">
            <p>3月/6月/12月/15月/19月/24月</p>
            <p>多种套餐，随你选择</p>
            <h4>低至7.0折</h4>
          </RechargeCard>
          <RechargeCard title="油卡直充" type="2">
            <p>100元/200元/500元</p>
            <h4>9.9折快速到账</h4>
            <p>圈存即可使用</p>
          </RechargeCard>
        </div>
      </div>
    </div>
    <!-- 加油卡充值 -->
    <div class="wrap section">
      <AppTag title="加油卡充值" tag="话费套餐/直充" color="#F7BD1C" />
      <div class="ldq-flex" :style="{ marginTop: '30px', height: '310px' }">
        <img :src="require('@/assets/img/card2.png')" width="280" />
        <RechargeCard title="话费套餐" type="1">
          <p>3月/6月/12月</p>
          <p>多种套餐，随你选择</p>
          <h4>低至9.0折</h4>
        </RechargeCard>
        <RechargeCard title="话费直充" type="2">
          <p>30元/50元/100元/200元/500元</p>
          <h4>9.9折快速到账</h4>
        </RechargeCard>
      </div>
    </div>
    <!-- 特惠商城 -->
    <div style="background: #f7fafc">
      <div class="wrap section">
        <AppTag title="特惠商城" tag="热销好物任你选" color="#581AA4" />
        <img :src="require('@/assets/img/card3.png')" :style="{
          width: '100%',
          marginTop: '30px',
        }" />
      </div>
    </div>
    <!-- 媒体报道 -->
    <div class="wrap section">
      <AppTag title="媒体报道" text="快速掌握企业动态" color="#2089FF" />
      <div class="ldq-flex-wrap">
        <div class="home-news" v-for="(it, ind) in currNews" :key="ind">
          <img :src="it.litpic" style="width: 100%; height: 100%" />
          <div class="news-mark" v-html="it.title"></div>
        </div>
      </div>
    </div>
    <!-- 便捷服务 -->
    <div style="background: #f7fafc">
      <div class="wrap section">
        <AppTag title="便捷服务" text="全心为您服务" color="#D22DEF" />
        <div class="ldq-flex" :style="{
          background: '#f0f4f7',
          marginTop: '40px',
          padding: '35px 0'
        }">
          <ModelCard
            v-for="(item, index) in ModelCardSn"
            :key="index"
            :src="item.src"
            :title="item.title"
            :content="item.content"
            imgWidth="40"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
  public currNews: Array<object> = []
  public banners: Array<object> = []
  public ModelCard: Array<object> = [
    { src: require('@/assets/img/model1.png'), title: '汽车后服务', content: '油卡套餐/直充，领油卡/查油价' },
    { src: require('@/assets/img/model2.png'), title: '特惠服务', content: '话费套餐/直充，领油卡/查油价' },
    { src: require('@/assets/img/model3.png'), title: '多重安全保障', content: '资金安全/支付安全/信息/数据安全' },
    { src: require('@/assets/img/model4.png'), title: '稳健运营', content: '服务用户10000+/充值订单10000+' }
  ]
  public ModelCardSn: Array<object> = [
    { src: require('@/assets/img/model5.png'), title: '免费领油卡', content: '中石化/中石油' },
    { src: require('@/assets/img/model6.png'), title: '附近油站', content: '距离最近/当前油价' },
    { src: require('@/assets/img/model7.png'), title: '今日油价', content: '0#/92#/95#/98#' },
    { src: require('@/assets/img/model8.png'), title: '违章查询', content: '当前待处理/历史违章' }
  ]

  private created () {
    // this.getIndexData()
    this.getNewsData()
  }

  /**
   * ldq - 获取首页接口数据 (页面写死, 暂时不掉接口)
   */
  // private async getIndexData () {
  //   const params = {}
  //   const result: any = await this.$http('/index/index.dos', params, 'post')
  //   console.log(result)
  // }

  private async getNewsData () {
    const params = {
      proId: 22,
      pageOn: 1,
      pageSize: 6
    }
    const result: any = await this.$http('aboutus/newsInformationList.dos', params)
    this.currNews = result.data.map.page.rows
  }
}
</script>

<style lang="less" scoped>
  .home-news {
    width: 292px;
    height: 165px;
    background-color: #ccc;
    border-radius: 4px;
    margin-top: 20px;
    position: relative;
    .news-mark {
      color: #fff;
      width: 292px;
      height: 45px;
      line-height: 45px;
      font-size:14px;
      padding: 0 15px;
      background:rgba(0,0,0,.5);
      border-radius: 0px 0px 4px 4px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
</style>
