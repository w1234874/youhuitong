<script>
export default {
  name: 'Vision',
  render () {
    return (
      <div class="vision">
        <img src={ require('@/assets/img/vision.png') } width="100%" />
        <div class="vision-text">
          <img src={ require('@/assets/img/vision-logo.png') } width="100%" />
        </div>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
  .vision {
    background-color: #f7fafc;
  }
  .vision-text {
    padding: 40px;
  }
</style>
