// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import 'mint-ui/lib/style.min.css'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import 'swiper/dist/css/swiper.min.css'
import { rem } from '@/assets/js/uitls.js'
import '@/assets/js/city.js'
import '@/assets/css/reset.css'
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import vuexI18n from 'vuex-i18n';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
});
Vue.use(vuexI18n.plugin, store);
const translationsEn = {
    "content": "This is some {type} content"
};
 
// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
// add translations directly to the application
Vue.i18n.add('en', translationsEn);
 
// set the start locale to use
Vue.i18n.set('en');
rem()
Vue.use(YDUI)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading,
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})