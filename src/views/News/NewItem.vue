<script>
export default {
  name: 'NewItem',
  props: ['data'],
  render () {
    return (
      <Row gutter={40} class="new-item">
        <Col span="8">
          <router-link to={ 'news/detail/' + this.data.artiId }>
            <img src={ this.data.litpic } class="new-img" />
          </router-link>
        </Col>
        <Col span="16" style={{ padding: '5px 0' }}>
          <router-link to={ 'news/detail/' + this.data.artiId }>
            <p class="new-title">{ this.data.title }</p>
          </router-link>
          <p class="new-content">{ this.data.summaryContents }</p>
          <Time
            class="new-time"
            time={ this.data.createTime }
            interval={1}
          />
        </Col>
      </Row>
    )
  }
}
</script>

<style lang="less" scoped>
  .new-item {
    padding: 20px 0;
    position: relative;
    .new-img {
      width: 100%;
      height: 150px;
      border-radius: 5px;
    }
    .new-title {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }
    .new-content {
      color: #999;
      margin-top: 25px;
      letter-spacing: 1px;
      font-size: 14px;
      line-height: 18px;
    }
    .new-time {
      color: #999;
      position: absolute;
      right: 30px;
      top: 7px;
    }
  }
</style>
