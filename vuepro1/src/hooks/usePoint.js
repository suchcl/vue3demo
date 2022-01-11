/**
 * 这是一个hook函数
 * hook函数记得要有返回数,否则没有办法使用,因为没有返回,函数默认的返回是undefined
 */
import { reactive, onMounted, onUnmounted } from "vue";
function savePoint() {
    // 实现鼠标打点相关数据
    let point = reactive({
        x: 0,
        y: 0
    });


    // 实现鼠标打点的相关方法
    function getPosition(event) {
        point.x = event.pageX;
        point.y = event.pageY;
    }

    // 实现鼠标打点的生命周期钩子函数
    onMounted(() => {
        window.addEventListener("click", getPosition);
    })

    onUnmounted(() => {
        window.removeEventListener("click", getPosition);
    })

    // 记得return
    return point;
}

export default savePoint;