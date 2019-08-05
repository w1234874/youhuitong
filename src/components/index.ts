import AppSwiper from '@/components/AppSwiper.vue'
import AppTag from '@/components/AppTag.vue'
import ModelCard from '@/components/ModelCard.vue'
import RechargeCard from '@/components/RechargeCard.vue'

const list = [
  AppSwiper,
  AppTag,
  ModelCard,
  RechargeCard
]

export default {
  install (Vue: any, options: any) {
    for (let item of list) {
      Vue.component(item.name, item)
    }
  }
}
