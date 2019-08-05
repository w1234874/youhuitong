<script>
export default {
  name: 'AppSwiper',
  render () {
    return (
      <Carousel autoplay loop>
      <CarouselItem>
      <router-link to="/ac/ac2"><img src={ require('@/assets/img/banner5.png') } width="100%" /></router-link>
        </CarouselItem>
      <CarouselItem>
        <router-link to="/ac/ac3"><img src={ require('@/assets/img/banner6.png') } width="100%" /></router-link>
      </CarouselItem>

      <CarouselItem>
        <router-link to="/ac/ac1"><img src={ require('@/assets/img/banner4.png') } width="100%" /></router-link>
      </CarouselItem>


      </Carousel>
    )
  }
}
</script>
