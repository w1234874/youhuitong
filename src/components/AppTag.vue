<script>
export default {
  name: 'AppTag',
  props: ['title', 'tag', 'text', 'color'],
  render () {
    return (
      <div class="app-tag" style={{
        borderLeft: '5px solid ' + this.color
      }}>
        <span class="title">{ this.title }</span>
        { this.tag ? <span class="tag">{ this.tag }</span> : null }
        { this.text ? <span class="text">{ this.text }</span> : null }
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
  .app-tag {
    display: inline-block;
    padding: 0 10px;
    .title {
      font-weight: 700;
    }
    .tag {
      color: #EA8F3E;
      font-size: 12px;
      background-color: #FDECBF;
      padding: 3px 5px;
      margin-left: 10px;
    }
    .text {
      color: #B3B3B3;
      font-size: 12px;
      padding: 3px 5px;
      margin-left: 10px;
    }
  }
</style>
