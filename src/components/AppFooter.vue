<script>
export default {
  name: 'AppFooter',
  render () {
    return (
      <div class="app-footer">
        <div class="wrap">
          <Row>
            <Col span="4">
              <div class='ewmbox'>
              <img src={ require('@/assets/img/ewm.png') }/>
              <span class='ewmtext'>扫描关注“惠油通”公众号</span>
              </div>
              <div style={{
                padding: '14px 0'
              }}>
                <img src={ require('@/assets/img/foot-logo.png') } width="50%" style='margin-left:40px;'/>
                <div style={{ marginTop: '20px' }}>
                  <img src={ require('@/assets/img/renzheng.png') } width="51%" style={{
                    float: 'left'
                  }} />
                  <a href='http://www.baidu.com'><img src={ require('@/assets/img/kexin.png') } width="48%" style={{
                    float: 'right'
                  }} /></a>
                </div>
              </div>
            </Col>
            <Col span="2">
              <div style={{
                color: '#1C2141',
                width: '100%',
                height: '135px',
                borderRight: '1px solid #CBD4D9'
              }}></div>
            </Col>
            <Col span="2" style="color: #1C2141">.</Col>
            <Col span="12">
              <p>客服电话：400-1138-959（工作日09:00—17:30）</p>
              <p>地址：安徽省铜陵市大市场五期1号商务楼F5号 </p>
            </Col>
            <Col span="4">
              <p>官方QQ：2781858125</p>
              <p>邮箱：hyt_customer@sohu.com</p>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
  .app-footer {
    height: 220px;
    padding: 45px 0;
    background: #1C2141;
    text-align: left;
    border-top: 1px solid rgba(240,243,245,1);
    p {
      font-size:12px;
      font-weight:400;
      color:#AFB1B3;
      padding: 27px 0;
    }

    .ewmbox{
      position: absolute;
      left: -185px;
      bottom: 49px;
      width: 77px;
      height: 77px;
      img{
        width: 100%;
        height: 100%;
       background-color: #1C2141;
       border-radius: 10px;
      }
      .ewmtext{
        margin-top: 24px;
        margin-left: -22px;
        display: block;
        color: #AFB1B3;
        font-size: 12px;
        width: 200px;
        
      }
    }
  }
</style>
