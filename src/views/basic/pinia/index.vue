<template>
  <div class="app-container">
    <div style="color: red">
      <p>解构store</p>
      <p>
        store是一个用reactive包裹的响应式对象，直接解构会使其失去响应性，可以通过storeToRefs()进行解构
      </p>
    </div>
    <p>count:{{ count }}</p>
    <p>doubleCount:{{ doubleCount }}</p>
    <el-divider />

    <div style="color: red">
      <p>修改store</p>
      <p>
        state直接修改（不推荐）、$patch修改，可同时修改多值、通过定义的actions方法修改（推荐）
      </p>
    </div>
    <p>count:{{ count }}</p>
    <el-button type="primary" @click="addCount">直接调用修改</el-button>
    <el-button type="primary" @click="addCount1">通过$patch修改</el-button>
    <el-button type="primary" @click="addCount2"
      >调用actions中方法修改</el-button
    >
    <el-divider />

    <div style="color: red">
      <p>监听store</p>
      <p>
        在引入组件中通过$subscribe()监听页面中state的变化；监听pinia实例上所有属性的变化
      </p>
    </div>
    <p>count数据变化 {{ status }} 次</p>
    <el-divider />

    <div style="color: red">
      <p>getters</p>
      <p>大多数getter只会依赖state状态，使用其他getter，通过this访问</p>
      <p>访问其他store的getter，可以引入后直接在getter中使用</p>
      <!-- 
          import { defineStore } from 'pinia'
          import { useOtherStore } from './otherStore'

          export const useCounterStore = defineStore('counter', {
            state: () => ({
              count: 1
            }),
            getters: {
              composeGetter(state) {
                const otherStore = useOtherStore()
                return state.count + otherStore.count
              }
            }
          })
      -->
      <p>
        将参数传递给getter，getter本质上是一个computed，无法传递任何参数，可以返回一个函数来接收传递的参数
      </p>
      <!-- 
        import { defineStore } from 'pinia'

        export const useUserStore = defineStore('user', {
          state: () => ({
            users: [{ id: 1, name: 'Tom'}, {id: 2, name: 'Jack'}]
          }),
          getters: {
            getUserById: (state) => {
              return (userId) => state.users.find((user) => user.id === userId)
            }
          }
        })
       -->
      <!-- 
         <script setup>
            import { storeToRefs } from 'pinia'
            import { useUserStore } from '@/stores/user'

            const userStore = useUserStore()
            const { getUserById } = storeToRefs(userStore)
          </script>

          <template>
            <p>User: {{ getUserById(2) }}</p>
          </template>
        -->
    </div>
    <el-divider />

    <div style="color: red">
      <p>actions</p>
      <p>支持同步方法，也支持异步函数</p>
      <p>访问其他store的actions，可以引入后直接在actions中使用</p>
    </div>

    <div style="color: red">
      <p>plugins</p>
      <p>
        无论是使用pinia还是vuex，store中存储的数据，一刷新就会丢失，pinia使用一个插件可以解决
      </p>
      <!-- 
        安装插件：`npm i pinia-plugin-persist`
        引入插件：`
            import { createPinia } from 'pinia'
            import piniaPluginPersist from 'pinia-plugin-persist'

            const pinia = createPinia()
            pinia.use(piniaPluginPersist)
        `
        store定义时开启插件：`
            import { defineStore } from 'pinia'

            export const useCounterStore = defineStore('counter', {
              state: () => ({ count: 1 }),
              // 开启数据缓存
              persist: {
                enabled: true
              }
            })
        `
        默认情况下会以storeId作为key值，把state中所有状态存储在sessionStorage中，我们也可以通过strategies进行修改：`
          persist: {
            enabled: true，
            strategies: [
              {
                key: 'myCounter', // 存储的 key 值，默认为 storeId
                storage: localStorage, // 存储的位置，默认为 sessionStorage
                paths: ['name', 'age'], // 需要存储的 state 状态，默认存储所有的状态
              }
            ]
          }
        `
       -->
    </div>
  </div>
</template>

<script setup>
import useCounterStore from "@/store/modules/counter";

let counterStore = useCounterStore();
let { count, doubleCount } = storeToRefs(counterStore);

let addCount = () => {
  counterStore.count++;
};
let addCount1 = () => {
  // counterStore.$patch({
  // 这种方式修改集合都需要创建一个新的集合，代价太高，因此可以通过函数的方式批量修改
  //   count: counterStore.count++,
  // });
  counterStore.$patch((state) => {
    state.count++;
  });
};
let addCount2 = () => {
  counterStore.increment();
};

const status = ref(0);
counterStore.$subscribe((mutation, state) => {
  status.value++;
});
</script>
