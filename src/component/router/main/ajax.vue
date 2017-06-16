<template>
    <div>
        <!--<div v-text="msg"></div>-->
        <el-input type="textarea" :rows="2" placeholder="請輸入內容" v-model="textarea">
        </el-input>
        <el-button type="primary" size="large" v-on:click="send">送出</el-button>
        <el-button size="large" v-on:click="clear">清除</el-button>
        <div v-for="(item,index) in data" class="box" v-on:click="del(index)" v-text="item">
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
            return '!!'
        },
        data() {
            return exampleApiCtrl.state.data || '';
        },
        bbbb() {

        }
    },
    methods: {
        callApi() {
            exampleApiCtrl.dispatch('callApi');
        },
        send() {
            if (this.textarea !== '') {
                exampleApiCtrl.dispatch('postApi', this.textarea);
            } else {
                alert("沒有輸入內容");
            }
            this.textarea = '';
        },
        reverse(getData) {
            return getData.reverse();
        },
        clear() {
            this.textarea = '';
        },
        del(x) {
            // console.log('x: ', x);
            // this.data.splice(x, 1);
        }
    }
}
</script>