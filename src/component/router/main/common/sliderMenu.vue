<template>
    <div class="left-menu animated bounceInLeft" v-show="status">
        <el-menu @select="handle" theme="dark">
            <el-submenu index="1">
                <template slot="title">頁面</template>
                <el-menu-item-group title="基本頁面">
                    <el-menu-item index="首頁">首頁</el-menu-item>
                    <el-menu-item index="test1">test1</el-menu-item>
                    <el-menu-item index="test2">test2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!--<el-menu-item v-for="(key,index) in menuList" :key="index" :index="String(index+2)">{{key}}</el-menu-item>-->
        </el-menu>
    </div>
</template>
<script>
import { sliderMenuCtrl } from 'Data/store';
import router from 'component/router';
export default {
    computed: {
        status() {
            console.log('sliderMenuCtrl.state.status: ', sliderMenuCtrl.state.status);
            return sliderMenuCtrl.state.status
        }
        // ,
        // menuList() {
        //     return ['聯繫', '尚未想到']
        // }
    },
    methods: {
        handle(key) {
            console.log('key: ', key);
            if (key.length > 0) {
                console.log('key.length: ', key.length);
                router.push({ name: key })
                sliderMenuCtrl.dispatch('Hide')
            }
        }
    }
}
</script>