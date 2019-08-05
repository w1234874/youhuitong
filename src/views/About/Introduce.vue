<script>
export default {
  name: 'Introduce',
  render () {
    return (
      <div class="introduce">
        <img src={ require('@/assets/img/introduce.png') } width="100%" />
        <div class="introduce-text">
      油惠卡是浙江中链科技有限公司旗下自主研发的一款致力于为车主提供价格优惠，操作便捷，服务周到的一站式互联网汽车后市场创新平台。平台目前推出折扣加油，违章查询，话费充值等服务。
油惠卡整合自身资源，与各大品牌商进行合作，并携手中石化和中石油集团等巨头，打造便捷优惠的在线加油充值项目，让车主享受低价折扣加油，节约出行成本！套餐内容多样化，随心选择，多用多省！与第三方资金合作，资金安全，100%到账。
        </div>

    <div class="introduce-text">

      </div>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
  .introduce-text {
    padding: 40px;
    color: #333333;
    background-color: #f7fafc;
    font-size:14px;
    line-height:30px;
    letter-spacing: 1px;
  }
</style>
