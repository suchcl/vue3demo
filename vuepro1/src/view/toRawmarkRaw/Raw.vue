<template>
    <div class="raw">
        <div class="user">
            <h3>用户信息</h3>
            <h4>姓名: {{name}}</h4>
            <p>年龄: {{age}}</p>
            <p>薪资: {{job.j1.salary}}</p>
            <p v-if="person.car">车辆信息: {{person.car}}</p>
            <ul class="btn-area">
                <li>
                    <button class="btn" @click="name+='~'">修改姓名</button>
                </li>
                <li>
                    <button class="btn" @click="age++">修改年龄</button>
                </li>
                <li>
                    <button class="btn" @click="job.j1.salary++">涨薪</button>
                </li>
                <li>
                    <button class="btn" @click="addCar">购买一辆车</button>
                </li>
                <li>
                    <button class="btn" @click="person.car.name='凯迪拉克'">修改品牌</button>
                </li>
                <li>
                    <button class="btn" @click="person.car.price++">修改价格</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { markRaw, reactive, toRefs } from '@vue/reactivity'
    export default {
        setup(){
            let person = reactive({
                name: "Nicholas Zakas",
                age: 18,
                job: {
                    j1: {
                        salary: 20
                    }
                }
            });

            function addCar(){
                let car = {
                    name: "奥迪",
                    price: 38
                };
                // person.car = car; // 这种方式,可以修改车的品牌和车价格
                person.car = markRaw(car); //车辆的信息不能修改了,品牌和价格都不能修改了,这已经时一个原始对象了
            }
            return {
                person, // 由于有动态添加的car属性,所以需要将源对象也返回去
                ...toRefs(person),
                addCar
            }
        }
    }
</script>

<style scoped>

</style>