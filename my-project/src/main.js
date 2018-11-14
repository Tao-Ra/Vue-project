// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Jq from 'jquery'
Vue.prototype.$ajax=Jq;

import Axios from 'axios'
Vue.prototype.$Axios=Axios

// import iView from 'iview';
// Vue.use(iView);
import {Row,Col,Icon,Input,Switch} from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('row-r',Row);
Vue.component('col-c', Col);
Vue.component('i-icon', Icon);
Vue.component('i-input', Input);
Vue.component('i-switch', Switch);





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<router-view/>'
})
