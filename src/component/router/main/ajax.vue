<template>
    <div>
        <div v-text="msg"></div>
        <el-button type="primary" v-on:click="callApi">Call Ajax</el-button>
    </div>
</template>
<script>
import { exampleApiCtrl } from './../../../Data/store.js';
console.log('exampleApiCtrl: ', exampleApiCtrl);
export default {
    computed: {
        msg() {
            return 'Ajax!!'
        }
    },
    methods: {
        callApi() {
            console.log(exampleApiCtrl);
            exampleApiCtrl.dispatch('callApi');
        }
    }
}
</script>