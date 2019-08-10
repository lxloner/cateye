import Loading from "./index.vue";
import Vue from "vue"
export default ()=>{
    //通过(Vue.extend)继承出来的组件我可以在页面中任何一个地方使用
    //通过继承vue拿出来vue身上的一些公有的方法
    let LoadingComponent = Vue.extend(Loading);

    //通过 new  动态的创建一个挂载点
    let vm = new LoadingComponent({
        el:document.createElement("div"),
        methods:{
            handlemount(){
                document.body.appendChild(vm.$mount().$el)
            },
            handleDestory(){
                document.body.removeChild(vm.$mount().$el)
            }
        }
    })

    return vm;
}