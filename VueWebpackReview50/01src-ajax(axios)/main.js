import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource)//内部会给vm对象和组件对象添加一个$http $get/$post
new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})