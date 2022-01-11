<template>
    <div class="is-res">
        <h3>汽车信息</h3>
        <h4>品牌: {{name}}</h4>
        <p>价格: {{price}}</p>
        <p>数量: {{num}}</p>
    </div>
</template>

<script>
import { ref,reactive, toRefs, readonly,isRef,isReactive,isReadonly,isProxy} from '@vue/reactivity'
    export default {
        setup(){
            let car = reactive({
                name: "奔驰",
                price: 40
            });

            let num = ref(0);

            let car2 = readonly(car);

            console.log(isReactive(car)); // true
            console.log(isRef(num)); // true
            console.log(isReadonly(car2)); // true
            console.log(isProxy(car)); // true

            return {
                num,
                ...toRefs(car)
            }
        }
    }
</script>