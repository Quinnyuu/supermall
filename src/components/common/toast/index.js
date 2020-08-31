import Toast from './Toast.vue'
const obj = {}

obj.install = function (Vue) {
    //构建组件构造器
    const toastConstructor = Vue.extend(Toast);
    //创建一个组件对象
    const toast = new toastConstructor()
    //将组件对象手动挂载到某一元素上
    toast.$mount(document.createElement('div'))
    //将元素挂载到body上
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast;
}

export default obj