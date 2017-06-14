<template>
    <div class="left-menu animated bounceInLeft" v-show="status">
        <el-menu @select="handle" theme="dark">
            <el-submenu index="1">
                <template slot="title">頁面</template>
                <el-menu-item index="首頁">Home</el-menu-item>
                <el-menu-item index="fileReader">FileReader</el-menu-item>
                <el-menu-item index="alert">Alert</el-menu-item>
                <el-menu-item index="slideshow">Slideshow</el-menu-item>
                <el-menu-item index="ajax">Ajax</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import { sliderMenuCtrl } from 'Data/store';
import router from 'component/router';
export default {
    computed: {
        status() {
            return sliderMenuCtrl.state.status;
        }
    },
    methods: {
        handle(key) {
            if (key.length > 0) {
                router.push({ name: key });
                sliderMenuCtrl.dispatch('Hide')
            }
        }
    }
}
</script>