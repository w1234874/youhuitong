<script>
import text1 from '@/assets/img/grid_text1.png'
import text2 from '@/assets/img/grid_text2.png'

export default {
  name: 'RechargeCard',
  props: ['title', 'type'],
  render () {
    return (
      <div class="recharge-card">
        <img src={ this.type === '1' ? text1 : text2 } width="100" />
        <h2>{ this.title }</h2>
        { this.$slots.default }
        <router-link to="/download" tag="button">充值享优惠</router-link>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
  .recharge-card {
    width: 300px;
    height: 100%;
    padding: 35px 45px;
    border:1px solid rgba(235,239,242,1);
    position: relative;
    h2 {
      color: #333333;
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 35px;
    }
    h4 {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    p {
      font-size: 14px;
      color: #B3B3B3;
      margin-bottom: 15px;
    }
    button {
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      margin-top: 40px;
      padding: 14px 34px;
      border: 0 none;
      border-radius: 4px;
      background-color: #262F63;
      box-shadow: 0 5px 10px 0 rgba(38, 47, 99, .5);
      position: absolute;
      left: 44px;
      bottom: 46px;
      cursor: pointer;
    }
  }
</style>
