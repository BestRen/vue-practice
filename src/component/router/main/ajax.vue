<template>
    <div>
        <div v-text="msg"></div>
        <el-button type="primary" v-on:click="callApi">Call Ajax</el-button>
        <div v-text="data"></div>
    </div>
</template>
<script>
import { exampleApiCtrl } from './../../../Data/store.js';

export default {
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