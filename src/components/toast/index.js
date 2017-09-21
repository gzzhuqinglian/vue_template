import Vue from 'vue'

const Loading = Vue.extend(require('./toast.vue'))

let instance;

export default {
    open: (options = {} ) => {
        if (!instance) {
            instance = new Loading({
                el: document.createElement('div')
            })
            document.body.appendChild(instance.$el)
        }
        instance.message = options.message || '消息提示'
        if (instance.visible) return
        Vue.nextTick(() => {
            instance.visible = true
        })
        setTimeout( function() {
            instance.visible=false;
        },1500)
    },
    close() {
        if (instance) {
            instance.visible = false;
        }
    }
}