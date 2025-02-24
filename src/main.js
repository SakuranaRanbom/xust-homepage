import Vue from 'vue'
import App from './App.vue'
import Carousel3d from 'vue-carousel-3d';
import scroll from 'vue-seamless-scroll'
import animated from 'animate.css';
import router from './router'
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
import EasySlider from 'vue-easy-slider'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueFullPage);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app').use(scroll).use(Carousel3d).use(animated).use(EasySlider).use(ElementUI);