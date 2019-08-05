<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

@Component({
  components: {
    AppHeader,
    AppFooter
  }
})
export default class App extends Vue {

}
</script>

<style lang="less">
  .wrap {
    width: 920px;
    margin: 0 auto;
  }
  .hand {
    cursor: pointer;
  }
  .ldq-flex {
    display: flex;
    justify-content: space-between;
  }
  .ldq-flex-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .section {
    padding: 40px 0;
  }
  .ldq-img {
    vertical-align: bottom;
  }
  .ldq-over {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
