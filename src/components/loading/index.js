import Vue from 'vue'

const Loading = Vue.extend(require('./loading.vue'))

let instance;

export default {
    open() {
        if (!instance) {
            instance = new Loading({
                el: document.createElement('div')
            })
            document.body.appendChild(instance.$el)
        }
        if (instance.visible) return

        Vue.nextTick(() => {
            instance.visible = true
        })
    },
    close() {
        if (instance) {
            instance.visible = false;
        }
    }
}