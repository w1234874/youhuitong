<script>
export default {
  name: 'AppHeader',
  methods: {
    /**
     * ldq - 渲染顶部公告栏
     */
    headerTop () {
      return (
        <div class="header-top">
          <div class="wrap">
          客服电话
          <span style="color: #4D4D4D">400-1138-959</span>
          （09:00-17:30）
          <div class="head-i hand"
            onMouseover={e => {
              this.$refs.ewm.style.display = 'block'
            }}
            onMouseout={e => {
              this.$refs.ewm.style.display = 'none'
            }}
          >
            <img src={ require('@/assets/img/ewm.png') } ref="ewm" style={{
              width: '150px',
              display: 'none',
              position: 'absolute',
              top: '20px',
              zIndex: 99
            }} />
            <img src={ require('@/assets/img/wechat.svg') } width="15" />&ensp;微信关注
          </div>
          <div class="head-i hand" onClick={e => {
            this.$router.push({ path: '/news', query: { proId: '14' } })
          }}>
            <img src={ require('@/assets/img/noice.svg') } width="15" />&ensp;最新公告
          </div>
          </div>
        </div>
      )
    },
    /**
     * ldq - 渲染nav导航栏
     */
    headerNav () {
      return (
        <ul style={{ float: 'right' }}>
          <router-link tag="li" to="/" exact active-class="ldq-active">首页</router-link>
          <router-link tag="li" to="/about" active-class="ldq-active">关于我们</router-link>
          <router-link tag="li" to="/news" active-class="ldq-active">新闻动态</router-link>
          <router-link tag="li" to="/help" active-class="ldq-active">帮助中心</router-link>
          <router-link tag="li" to="/download" active-class="ldq-active">APP下载</router-link>
        </ul>
      )
    }
  },
  render () {
    return (
      <div class="app-header">
        { this.headerTop() }
        <div class="header-bottom">
          <div class="wrap">
            <router-link tag="div" to="/" class="hand" style={{
              padding: '10px 0',
              display: 'inline-block'
            }}>
              <img src={ require('@/assets/img/logo.png') } style={{ width: '114px' }} />
            </router-link>
            { this.headerNav() }
          </div>
        </div>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
  .app-header {
    border-bottom: 1px solid rgba(240,243,245,1);
    img {
      vertical-align: middle;
    }
    .header-top {
      color: #999;
      font-size: 12px;
      padding: 8px;
      background-color: #f7f7f7;
      .head-i {
        float: right;
        margin-left: 20px;
      }
    }
    .header-bottom {
      color: #333333;
      background-color: #fff;
      ul {
        height: 54px;
        li {
          height: 100%;
          line-height:54px;
          float: left;
          cursor: pointer;
          margin-left: 40px;
          box-sizing: border-box;
        }
      }
      .ldq-active {
        color: #1C2141;
        font-weight: bold;
        border-bottom: 2px solid #1C2141;
      }
    }
  }
</style>
