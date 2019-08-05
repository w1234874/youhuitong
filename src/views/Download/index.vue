<script>
export default {
  name: 'Download',
  render () {
    return (
      <div class="download">
        <img src={ require('@/assets/img/download.jpg') } width="100%" />
        <div class="wrap content">
          <div class="ewm">
            <img src={ require('@/assets/img/ewm.png') } width="180" />
          </div>
          <div class="h1">扫码下载APP 享福利+优惠</div>
          <div class="ldq-btn">
            <div class="btn" style="float: left; margin-right: 50px">
              <Icon type="logo-android" size="40" />Android下载
            </div>
            <div class="btn" style="float: right">
              <Icon type="logo-apple" size="40" />Phone下载
            </div>
          </div>
        </div>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
  .download {
    position: relative;
    .content {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .ewm {
      position: absolute;
      top: 15%;
      left: 50%;
      text-align: center;
      transform: translateX(-50%);
    }
    .h1 {
      position: absolute;
      top: 57%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: #fff;
      font-size: 24px;
    }
    .ldq-btn {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translateX(-50%);
    }
    .btn {
      width: 175px;
      height: 50px;
      color: #fff;
      line-height: 50px;
      text-align: center;
      border-radius: 50px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
</style>
