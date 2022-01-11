<template>
    <div>生命周期</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
export default {
    setup(){
        onBeforeMount()
        onMounted()
        onBeforeUpdate()
        onUpdated()
        onBeforeUnmount()
        onUnmounted()
        return {}
    },
    // beforeCreate(){},
    // created(){},
    // beforeMount(){},
    // mounted(){},
    // beforeUpdate(){},
    // updated(){},
    // beforeUnmount(){},
    // unmounted(){}
}
</script>