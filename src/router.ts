import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/index.vue'
import About from './views/About/index.vue'
import Introduce from './views/About/Introduce.vue'
import Vision from './views/About/Vision.vue'
import Callus from './views/About/Callus.vue'
import News from './views/News/index.vue'
import Detail from './views/News/Detail.vue'
import Help from './views/Help/index.vue'
import Download from './views/Download/index.vue'

import Ac1 from './views/Home/ac1.vue'
import Ac2 from './views/Home/ac2.vue'
import Ac3 from './views/Home/vc3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/about',
      name: 'about',
      component: About,
      redirect: '/about/introduce',
      children: [
        {
          path: '/about/introduce',
          component: Introduce
        }, {
          path: '/about/vision',
          component: Vision
        }, {
          path: '/about/callus',
          component: Callus
        }
      ]
    }, {
      path: '/news',
      name: 'news',
      component: News
    }, {
      path: '/news/detail/:Id',
      name: 'detail',
      component: Detail
    }, {
      path: '/help',
      name: 'help',
      component: Help
    }, {
      path: '/download',
      name: 'download',
      component: Download
    }, {
      path: '/ac/ac1',
      component: Ac1
    }, {
      path: '/ac/ac2',
      component: Ac2
    }, {
      path: '/ac/ac3',
      component: Ac3
    }
  ]
})
