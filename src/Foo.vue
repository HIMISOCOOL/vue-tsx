<script lang="tsx">
import * as tsx from "vue-tsx-support";
import HelloWorld from '@/components/HelloWorld.vue'
export default tsx.component({
    render() {
        return (<HelloWorld msg={ 'hi' }/>)
    }
})
</script>
