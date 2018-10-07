import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

export default Vue.extend({
    render(h) {
        return (<HelloWorld msg={ 'hi' }/>)
    }
})
