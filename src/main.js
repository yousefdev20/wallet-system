import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from '@kyvg/vue3-notification'
import VueApexCharts from "vue3-apexcharts";

axios.defaults.timeout = 1000 * 300
axios.defaults.baseURL = 'http://localhost:8000/api/'

const app = createApp(App)

app.provide('$axios', axios)
app.use(VueApexCharts);

app.use(Notifications).use(VueAxios, axios)
app.use(store).use(router).mount('#app')

let local = auth()

axios.defaults.headers.common.Authorization = `Bearer ${local}`

axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (error.response.status === 401) {
        if (router.currentRoute.name !== 'Login') {
            // this.$notify({group: 'auth', text: 'token has expired', type: 'error'})
        }
        store.getters.cleanCache
        // router.push('/user/login')
    }
    return Promise.reject(error)
})
function auth() {
    return JSON.parse(localStorage.getItem('user') ||localStorage.getItem('admin')).token
}