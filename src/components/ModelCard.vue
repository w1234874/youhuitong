<script>
export default {
  name: 'ModelCard',
  props: {
    src: {
      type: String
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    imgWidth: {
      type: [String, Number],
      default: '60'
    }
  },
  render () {
    return (
      <div class="model-card">
        <img src={ this.src } style={{ width: this.imgWidth + '%' }} />
        <h3>{ this.title }</h3>
        <p>{ this.content }</p>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
  .model-card {
    width: 200px;
    text-align: center;
    img {
      width: 116px;
    }
    h3 {
      color: #333;
      font-size: 16px;
      font-weight: 700;
      padding: 10px;
    }
    p {
      color: #B3B3B3;
      font-size: 13px;
      font-weight: 400;
    }
  }
</style>
