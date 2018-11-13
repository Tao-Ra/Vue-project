// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Jq from 'jquery'
Vue.prototype.$ajax=Jq;

import Axios from 'axios'
Vue.prototype.$Axios=Axios

import iView from 'iview';
Vue.use(iView);
// import {Anchor, AnchorLin} from 'iview';
import 'iview/dist/styles/iview.css';
// Vue.component('anchor', Anchor);
// Vue.component('anchor-link', AnchorLink);





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<router-view/>'
})
