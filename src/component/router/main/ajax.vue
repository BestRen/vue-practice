<template>
    <div>
        <div v-text="msg"></div>
        <el-button type="primary" v-on:click="callApi">Call Ajax</el-button>
        <div v-text="data"></div>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
        </el-input>
        <el-button type="primary" size="large">送出</el-button>
    </div>
</template>
<script>
import { exampleApiCtrl } from './../../../Data/store.js';

export default {
    data() {
        return {
            textarea: ''
        }
    },
    mounted() {
        exampleApiCtrl.dispatch('callApi');
    },
    computed: {
        msg() {
            return 'Ajax!!'
        },
        data() {
            return exampleApiCtrl.state.data
        }
    },
    methods: {
        callApi() {
            exampleApiCtrl.dispatch('callApi');

        }
    }
}
</script>