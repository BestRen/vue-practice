<template>
    <div>
        <div>{{msg}}</div>
        <!--<img :src="img">-->
        <!--<input type="file" @change="upload">-->
        <!--<router-link :to="{ name: '測試頁'}">前往測試頁</router-link>-->
    </div>
</template>
<script>
import { imgRotate } from 'util/imgFix'
export default {
    // data() {
    //     return {
    //         img: './img/card.png'
    //     }
    // },
    computed: {
        msg() {
            return 'Hello Vue!!'
        }
    }
    // ,
    // methods: {
    //     upload(e) {
    //         const reader = new FileReader()
    //         const file = e.target.files[0]
    //         const self = this
    //         const img = document.createElement('img')
    //         console.log('test')
    //         reader.onload = () => {
    //             img.onload = () => {
    //                 self.img = imgRotate(img, 500)
    //             }
    //             img.src = reader.result
    //         };
    //         if (file && file.type.match('image.*')) {
    //             reader.readAsDataURL(file)
    //         }
    //     }
    // }
}
</script>