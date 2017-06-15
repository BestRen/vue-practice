<template>
    <div>
        <!--<div v-text="msg"></div>-->
        <!--<el-button type="primary" v-on:click="callApi">Call Ajax</el-button>-->
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
        </el-input>
        <el-button type="primary" size="large" v-on:click="send">送出</el-button>
        <div v-for="item in data">
            {{item}}
            <!--<div v-for="i in reverse(item)">{{i}}</div>-->
        </div>
    
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
            console.log(exampleApiCtrl.state.data);
            return exampleApiCtrl.state.data || '';


        }
    },
    methods: {
        callApi() {
            exampleApiCtrl.dispatch('callApi');
        },
        send() {
            console.log(this.textarea);
            exampleApiCtrl.dispatch('postApi', this.textarea);
            this.textarea = '';
        },
        reverse(getData) {
            console.log('getData: ', getData);
            return getData.reverse();
        }
    }
}
</script>