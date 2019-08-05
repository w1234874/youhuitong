<template>
  <div>
    <img :src="require('@/assets/img/news.png')" width="100%" />
    <div class="news wrap">
      <div class="new-title">
        <img :src="require('@/assets/img/news-text.png')" width="65" class="ldq-img" />
        <span :style="{
          color: '#333',
          fontWeight: 700,
          marginLeft: '30px'
        }">感恩回馈，超低折扣限量开启！</span>
        <span class="ldq-over ldq-img" :style="{
          color: '#999',
          width: '470px',
          display: 'inline-block',
          marginLeft: '20px'
        }">为回馈新老客户油惠卡特别推出为回馈新老客户为回馈新老客户为回馈新老客户...</span>
        <span @click="handleTabChange('14')" class="hand" :style="{
          color: '#999',
          float: 'right'
        }">更多>></span>
      </div>
      <div class="new-content">
        <Tabs :value="currType" @on-click="handleTabChange" style="max-height: 631px">
          <TabPane label="媒体报道" name="22">
            <Spin size="large" fix v-if="loading"></Spin>
            <NewItem v-for="(item, index) in currNews" :key="index" :data="item" />
          </TabPane>
          <TabPane label="行业资讯" name="18">
            <Spin size="large" fix v-if="loading"></Spin>
            <NewItem v-for="(item, index) in currNews" :key="index" :data="item" />
          </TabPane>
          <TabPane label="平台公告" name="14" style="height: 580px">
            <Spin size="large" fix v-if="loading"></Spin>
            <div v-for="(item, index) in currNews" :key="index" style="padding: 15px 0">
              <router-link :to="'/news/detail/' + item.artiId" tab="span">{{item.title}}</router-link>
              <Time :time="item.createTime" :interval="1" :style="{ float: 'right' }" />
            </div>
          </TabPane>
        </Tabs>
        <Page
          size="small"
          prev-text="上一页" next-text="下一页"
          :total="total"
          :page-size="pageSize"
          :style="{ textAlign: 'center' }"
          @on-change="getNewsData"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NewItem from './NewItem.vue'

@Component({
  components: {
    NewItem
  }
})
export default class News extends Vue {
  private loading: boolean = false
  private currNews: object = {}
  private currType: string = '22'
  private total: number = 0
  private pageSize: number = 3

  public created () {
    /**
     * Type 'string | string[]' is not assignable to type 'string'.
     * Type 'string[]' is not assignable to type 'string'.
     */
    this.currType = this.$route.query.proId as string || '22'
    this.getNewsData()
  }

  public mounted () {
    const tabBox: any = document.querySelector('.new-content .ivu-tabs-bar')
    tabBox.style.border = '0 none'
  }

  /**
   * ldq - 根据条件查询新闻
   * @param { Number } page 当前页数
   */
  private async getNewsData (page: number = 1) {
    const params = {
      proId: this.currType,
      pageOn: page,
      pageSize: this.currType === '14' ? 10 : 3
    }
    this.loading = true
    const result: any = await this.$http('aboutus/newsInformationList.dos', params)
    this.loading = false
    console.log(result.data.map)
    this.currNews = result.data.map.page.rows
    this.total = result.data.map.page.total
    this.pageSize = params.pageSize
  }

  /**
   * ldq - 切换tab栏
   * @param { String } proId 当前新闻类型
   */
  private handleTabChange (proId: string) {
    this.currType = proId
    this.getNewsData()
  }
}
</script>

<style lang="less" scoped>
  .news {
    margin: 30px auto;
    background-color: #f7fafc;
    .new-title {
      padding: 25px 20px;
      font-size: 14px;
      border-bottom: 1px solid #f0f3f5;
    }
    .new-content {
      padding: 30px 60px;
      max-height: 720px;
      .ivu-tabs .ivu-tabs-bar {
        border-bottom: 1px solid #f7fafc;
      }
    }
  }
</style>

<style lang="less">
  .news {
    .ivu-tabs-nav .ivu-tabs-tab:hover {
      color: #262F63;
    }
    .ivu-tabs-nav .ivu-tabs-tab-active {
      font-weight: 700;
      color: #262F63;
    }
    .ivu-tabs-ink-bar {
      background-color:#262F63;
    }
  }
</style>
