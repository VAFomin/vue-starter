import Vue from 'vue'
import router from "./plugins/router"
import vuetify from './plugins/vuetify'
import GSignInButton from 'vue-google-signin-button'

import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(GSignInButton);

new Vue({
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app');
