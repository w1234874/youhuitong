<script>
export default {
  name: 'Detail',
  data () {
    return {
      data: {}
    }
  },
  created () {
    // console.log(this.$route)
    this.getDetails()
  },
  methods: {
    async getDetails () {
      const params = {
        artiId: this.$route.params.Id
      }
      const result = await this.$http('aboutus/newsDetails.dos', params)
      if (!result.data.success) {
        return false
      }
      this.data = result.data.map.sysArticle
      console.log(result.data.map.sysArticle)
    }
  },
  render () {
    return (
      <div class="wrap news-detail">
        <h2>{ this.data.title }</h2>
        <p>{ this.data && this.data.createTime ? <Time time={ this.data.createTime } type="datetime" /> : null }</p>
        <div class="content" domPropsInnerHTML={ this.data.content }></div>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
  .news-detail {
    h2 {
      text-align: center;
      padding: 40px 0 20px;
      font-size: 24px;
      font-weight: 700;
    }
    p {
      text-align: center;
      border-bottom: 1px solid #eee;
      padding: 10px;
    }
    .content {
      padding: 30px;
    }
  }
</style>
